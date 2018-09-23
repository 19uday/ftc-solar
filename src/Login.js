import React, { Component } from 'react';
import './App.css';
import { login } from './actions/login';
import {connect} from "react-redux";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.state = {password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
      var htp = new XMLHttpRequest();
      var url = 'http://localhost:5000/login';
      var params = JSON.stringify({"email": this.state.email, "password": this.state.password});
      htp.open('POST', url, true);
      htp.setRequestHeader('Content-type', 'application/json');//Send the proper header information along with the request
      htp.send(params);
      var func = this;
      htp.onreadystatechange = function() {//Call a function when the state changes.
          if(htp.readyState === 4 && htp.status === 200) {
		          console.log(htp.responseText);
        		  var jso = JSON.parse(htp.responseText);
			        if(jso.result === "success"){
                  func.props.dispatch(login(func.state.email));
              }
		          else alert(jso.message);
  
        }
      }
			
      event.preventDefault();
  }


  render() {
    return (
	<div className="login">
		<div className="login-screen">
			<div className="app-title">
				<img src={ require('./ftc.jpeg') } />
			</div>
			
			<div className="login-form">
				<form  action="" method="post" role="form" onSubmit={this.handleSubmit}>

					<div className="control-group">
					<input type="text" className="login-field" value={this.state.email} onChange={this.handleChange} placeholder="Email" id="login-name" name="email"></input>
					<label className="login-field-icon fui-user"></label>
					</div>

					<div className="control-group">
					<input type="text" className="login-field" value={this.state.pass} onChange={this.handleChange} placeholder="Password" id="login-name" name="password"></input>
					<label className="login-field-icon fui-user"></label>
					</div>

					<button className="btn btn-primary btn-large btn-block" type="submit">Login</button>
				</form>
				
			</div>
		</div>
	</div>
    );
  }
}

export default connect()(Login);