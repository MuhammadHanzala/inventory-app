import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; 
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class Product extends React.Component{
 constructor(props) {
    super(props);
    this.state = {
        value: 1,
        stores: []
    };
 }
//     componentWillMount(){
//         var stores = [];

//         firebase.database().ref('/inventorymng/stores/').on('value', (data)=>{
//             var obj = data.val();
//             for(var prop in obj)
//             stores.push(obj[prop].newStore);
//             console.log(stores);
//             this.setState({
//                 stores: stores
//             })
//         })

//     }
//     handleChange = (event, index, value) =>{ this.setState({value});
//         var store =  event.target.childNodes[0].nodeValue;    
//                 console.log(store,index);
// }
submit(e){
        e.preventDefault();
        
        const newProduct = {
         productname : this.refs.productname.getValue(),
         manufacturer : this.refs.manufacturer.getValue(),
         description : this.refs.description.getValue()
         
        }
        console.log(newProduct);
    firebase.database().ref('inventorymng/products/').push({newProduct})

    browserHistory.push('/thanks');
    }

        
    


    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
            <h1>Add Product</h1>

            {/*<DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
         {this.state.stores.map((v,i)=>{
             return(
                <MenuItem value={v.storename} key={i} primaryText={v.storename} />
             )
         })}  
      </DropDownMenu>*/}
        <form onSubmit={this.submit.bind(this)}>
            <TextField hintText="Product Name" floatingLabelText="Product Name" required="required"  ref="productname"/>          
          <br />
          <TextField hintText="Manufacturer" floatingLabelText="Manufacturer" required="required" ref="manufacturer"/>
          <br  />
            <TextField hintText="Description" floatingLabelText="Description" required="required" ref="description"/>
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