import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; 
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';



export default class NewStore extends React.Component{
 constructor(props) {
    super(props);
 }


    submit(e){
        e.preventDefault();
        
        const newStore = {
         storename : this.refs.storename.getValue(),
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
        
            <h1>Add Store</h1>

        <form onSubmit={this.submit.bind(this)}>
           <TextField hintText="Store Name" type="name" floatingLabelText="Store Name" ref="storename" required="required"/>
          <br />
           <TextField hintText="Location" floatingLabelText="Location" required="required" ref="location" />
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