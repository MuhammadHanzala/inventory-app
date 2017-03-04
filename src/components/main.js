import React from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




export default class Main extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
        value: 1,
        crime: '',
        crimeReports: [],
        missingReports: []
  
    };



}

    componentWillMount(){
        
    }





    


    signout(ev) {
        ev.preventDefault();
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful.");
            browserHistory.push('/');
        }, function (error) {
            console.log("An error happened.");
        });
    }


 

    addPurchase(ev) {
        ev.preventDefault();
        browserHistory.push('/addpurchase');
    }
    addProduct(ev){
        ev.preventDefault();
        browserHistory.push('/addproduct');
    }
    addStore(ev){
        ev.preventDefault();
        browserHistory.push('/addstore');
    }
    stock(ev){
        ev.preventDefault();
        browserHistory.push('/stock');
    }
        sales(ev){
        ev.preventDefault();
        browserHistory.push('/sale');
    }
    addsale(ev){
        ev.preventDefault();
        browserHistory.push('/addsale');
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <center>
                            <br />
                    <RaisedButton primary={true} onClick={this.addStore.bind(this)} style={{margin: '5px'}} label="Add Store" />
                    <RaisedButton primary={true} onClick={this.addProduct.bind(this)} style={{margin: '5px'}} label="Add Product" />
                    <RaisedButton primary={true} onClick={this.addPurchase.bind(this)} style={{margin: '5px'}} label="Add Purchase Details" />
                    <RaisedButton primary={true} onClick={this.addsale.bind(this)} label="Add Sale Details" />
                    <RaisedButton primary={true} onClick={this.stock.bind(this)} style={{margin: '5px'}} label="View Stock" />
                    <RaisedButton primary={true} onClick={this.sales.bind(this)} style={{margin: '5px'}} label="View Sales" />


                    
                    <br />
                    <RaisedButton primary={true} onClick={this.signout.bind(this)} label="Sign Out" />
                    </center>
                    

                        <br /><br />
                    
                       
               
              
                        

                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}