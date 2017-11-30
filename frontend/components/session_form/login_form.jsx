import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const user = this.state;
      this.props.login(user);
    };
  }

  handleChange(field){
    return (e) =>{
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  loginDemoUser(){
    return ()=> this.props.login({email:"racheal@gmail.com", password:"password"});
  }

  render(){
    return (
      <form className='session-form login'>
        <h1>Log In</h1>
          <input placeholder="Email" type='text' onChange={this.handleChange('email')}></input>
          <input placeholder="Password" type='password' onChange={this.handleChange('password')}></input>
        <div className="session-button">
          <button type='sumbit' onClick={this.handleSubmit()}>Log In</button>
        </div>
        <div>
          <button onClick={this.loginDemoUser()}>Demo</button>
        </div>
        <div>
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          {this.props.errors[0]}
        </div>
      </form>
    );
  }


}

export default LoginForm;
