import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      designer: false
    };
  }

  componentWillUnmount(){
    this.props.clearError();
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const user = this.state;
      this.props.signup(user);
    };
  }

  handleChange(field){
    return (e) =>{
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleCheck(){
    return (e) =>{
      this.setState({
        designer: !this.state.designer
      });
    };
  }

  loginDemoUser(){
    return (e)=>{
      e.preventDefault();
      this.props.login({email:"racheal@gmail.com", password:"password"}).then(this.props.history.push("/profile"));
    };
  }

  render(){
    let err;
    if(this.props.errors.length !== 0){
      err = (<div>
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
        {this.props.errors[0]}
      </div>);
    }
    return (
      <form className='session-form signup'>
        <h1>Sign up</h1>
          <input placeholder="Username" type='text' onChange={this.handleChange('username')}></input>
          <input placeholder="Email" type='text' onChange={this.handleChange('email')}></input>
          <input placeholder="Password" type='password' onChange={this.handleChange('password')}></input>
        <label htmlFor="designerCheck" id="session-check">
          <input type="checkbox" id="designerCheck" onChange={this.handleCheck()} checked={this.state.designer}></input>
          I'm a designer</label>
        <div className="session-button">
          <button type='sumbit' onClick={this.handleSubmit()}>Sign Up</button>
        </div>
        <div>
          <button onClick={this.loginDemoUser()}>Don't want to signup yet? Try our Demo Login first</button>
        </div>
        {err}
      </form>
    );
  }


}

export default SignupForm;
