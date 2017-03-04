import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';



export default class MissingReportForm extends React.Component{
 constructor(props) {
    super(props);

    this.state = {
        value: 1,
        crime: '',
  
    };
  }

imgupl(e){
    e.preventDefault();
    var files = e.target.files[0];
    console.log(files.name);
    // var storageRef = firebase.storage().ref('images/' + files.name);
    // storageRef.put(files);


    
}

    submit(e){
        e.preventDefault();
        
        const newMissingReport = {
         name : this.refs.name.getValue(),
         email : this.refs.email.getValue(),
         city : this.refs.city.getValue(),
         address : this.refs.address.getValue(),
         namemp: this.refs.namemp.getValue(),
         agemp: this.refs.agemp.getValue(),
         heightmp: this.refs.heightmp.getValue(),
        usmp: this.refs.usmp.getValue(),
        }
        console.log(newMissingReport);

let currentUser = firebase.auth().currentUser;
    console.log(currentUser.uid);
    firebase.database().ref('crimesystem/' + 'missingreport' + '/'  ).push({newMissingReport})

    browserHistory.push('/thanks');
    }



    render(){
        return(
            <div>          
            <MuiThemeProvider>
<center>
      <div>
        
            <h1>Missing Person Report</h1>
            <br />
        <form onSubmit={this.submit.bind(this)}>
            <h3>Your Details</h3>
           <TextField hintText="Your Good Name" type="name" floatingLabelText="Name" ref="name" required="required"/>
          <br />
           <TextField hintText="Email Address" floatingLabelText="Email" ref="email" type="email" required="required"/>
           <br />
          <TextField hintText="City" floatingLabelText="City"  ref="city" required="required"/>          
          <br />
          <TextField hintText="Your Address" floatingLabelText="Address" type="commentbox"  ref="address" required="required"/>
          <br  /><br />
           <h3>Missing Persons Details</h3>
        <TextField hintText="Name of missing person" floatingLabelText="Name"  ref="namemp" required="required"/>
        <br />
        <TextField hintText="Age of missing person" floatingLabelText="Age" type='number'   ref="agemp" required="required"/>
        <br />
        <TextField hintText="Height of missing person" floatingLabelText="Height" type='number'  ref="heightmp" required="required"/>
        <br />
        <TextField hintText="Unique sign of missing person" floatingLabelText="Unique sign"  ref="usmp" required="required"/>

          <br /><br /><br /><p>Image of missing person</p>
           <TextField type="file" value="upload" onChange="this.imgupl.bind(this)" ref="img" required="required"/>
           

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