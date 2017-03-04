/*import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import DatePicker from 'material-ui/DatePicker';
import TableExampleComplex from './table';



export default class CrimeForm extends React.Component{
 constructor(props) {
    super(props);

    this.state = {
        value: 1
  
    };
  }



    submit(e){
        e.preventDefault();
        
        const newStore = {
         
        
         purchasedate : this.refs.purchasedate.getValue(),
        purchasequantity : this.refs.purchasequantity.getValue(),
        purchaseunitprice : this.refs.purchaseunitprice.getValue(),
        saledate : this.refs.saledate.getValue(),
        salequantity : this.refs.salequantity.getValue(),
        saleunitprice : this.refs.saleunitprice.getValue()
        }
        // console.log(newCrimeReport);

let currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid);
    firebase.database().ref('inventorymng/' + '/' + 'stores' + '/'  ).push({newStore})

    browserHistory.push('/thanks');
    }



    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
           <center> <h1>Create a Store</h1></center>
           <br />
           <h3>Store Details</h3>
        <form onSubmit={this.submit.bind(this)}>
                      <br />
           <br />
           <h3>Add Products</h3>
                     <br /><br />
            <h3>Add Purchase Details</h3>
            <DatePicker hintText="Purchase Date" ref="purchasedate"  required="required" />
            <TextField hintText="Quantity" floatingLabelText="Quantity" required="required" type="number" ref="purchasequantity"/>
            <br />
            <TextField hintText="Unit Price" floatingLabelText="Unit Price" required="required" type="number" ref="prchaseunitprice"/>
        <br /><br />
        <h3>Add Sale Details</h3>
            <DatePicker hintText="Sale Date" ref="saledate"  required="required" />
            <TextField hintText="Quantity" floatingLabelText="Quantity" required="required" type="number" ref="salequantity"/>
            <br />
            <TextField hintText="Unit Price" floatingLabelText="Unit Price" required="required" type="number" ref="saleunitprice"/>
          <br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>
        </form>
      </div>
      </center>
</MuiThemeProvider>
</div>
        )
    }
}
*/


import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; 
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';



export default class AddPurchase extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
        value: 1,
        pvalue: 1,
        stores: [],
        products: [],
        storeName: '',
        productName: ''
    };
 }


    componentWillMount(){
        var stores = [];

        firebase.database().ref('/inventorymng/stores/').on('value', (data)=>{
            var obj = data.val();
            for(var prop in obj)
            stores.push(obj[prop].newStore);
            console.log(stores);
            this.setState({
                stores: stores
            })
        })

    }
    handleChange = (event, index, value) =>{ this.setState({value});
        var store =  event.target.childNodes[0].nodeValue;    
                console.log(store,index);
                this.setState({storeName: store})
                
                var products = [];
        firebase.database().ref('/inventorymng/products/').on('value', (data)=>{
            var object = data.val();
            for(var prop in object)
            products.push(object[prop].newProduct);
            // console.log(products);
            this.setState({
                products: products
            })
        })

    }
    handChange = (event, index, pvalue) =>{ this.setState({pvalue});
        var product =  event.target.childNodes[0].nodeValue;    
                console.log(product,index);
            this.setState({productName: product})
}

    submit(e){
        e.preventDefault();
        var stores = [];
        const newStore = {
         storename : this.state.storename,
         location : this.refs.location.getValue()
         
        }
        console.log(newStore);
    firebase.database().ref('inventorymng/stores/').push({newStore})

    browserHistory.push('/thanks');
    }


    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
            <h1>Add Purchase Details</h1>
           <h3>Store:</h3> <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
         {this.state.stores.map((v,i)=>{
             return(
                <MenuItem value={v.storename} key={i} primaryText={v.storename} />
             )
         })}  
      </DropDownMenu>
      <br />
      <h3>Product:</h3><DropDownMenu maxHeight={300} value={this.state.pvalue} onChange={this.handChange}>
         {this.state.products.map((v,i)=>{
             return(
                <MenuItem value={v.productname} key={i} primaryText={v.productname} />
             )
         })}  
      </DropDownMenu>

        <form onSubmit={this.submit.bind(this)}>
           <DatePicker hintText="Purchase Date" ref="purchasedate"  required="required" />
            <TextField hintText="Quantity" floatingLabelText="Quantity" required="required" type="number" ref="purchasequantity"/>
            <br />
            <TextField hintText="Unit Price" floatingLabelText="Unit Price" required="required" type="number" ref="prchaseunitprice"/>
        <br /><br />
          <RaisedButton type="submit" primary={true}>Submit</RaisedButton>

        </form>
      </div>
      </center>
</MuiThemeProvider>
</div>
        )
    }
}
