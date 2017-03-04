import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, Router, browserHistory, Route, IndexRoute } from 'react-router';
import * as firebase from 'firebase';
import Signin from './components/signin';
import SignUp from './components/signup';
import Main from './components/main';
import Thanks from './components/thanks';
import AddPurchase from './components/addpurchase';
import NewStore from './components/addstore';
import AddSale from './components/addsale';
import AppBarExampleIcon from './components/appbar';
import Product from './components/addproduct';
import Sale from './components/sale';
import Stock from './components/stock';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCUerdTkM_odYkmpb9ROdT44xWS5dDxpZ8",
    authDomain: "project02-d14e4.firebaseapp.com",
    databaseURL: "https://project02-d14e4.firebaseio.com",
    storageBucket: "project02-d14e4.appspot.com",
    messagingSenderId: "363983779510"
  };
  firebase.initializeApp(config);



  class Home extends React.Component {

     constructor(props) {
        super(props);

            this.state = {
        value: 1

    };



}

   

  render() {
    return (
      <div>
        <MuiThemeProvider>
<center>
      <div>
       
        <Link to="/signin"><RaisedButton type="submit" primary={true} style={{margin: 12}} label="Log In" /></Link>
        <Link to="/signup"><RaisedButton type="submit" primary={true} style={{margin: 12}} label="Sign Up" /></Link>
      </div></center>
      </MuiThemeProvider>
      <br /><br />

                        
          

      
      </div>
    )
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppBarExampleIcon}>
        <IndexRoute component={Home} />
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/main" component={Main}></Route>
        <Route path="/addpurchase" component={AddPurchase}></Route>
        <Route path="/addproduct" component={Product}></Route>
        <Route path="/thanks" component={Thanks}></Route>
        <Route path="/addstore" component={NewStore}></Route>
        <Route path="/addsale" component={AddSale}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/stock" component={Stock}></Route>
        <Route path="/sale" component={Sale}></Route>
    </Route>
  </Router>
,
  document.getElementById('root')
);
