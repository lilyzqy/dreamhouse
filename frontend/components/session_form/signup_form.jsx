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

  render(){
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
        <ul>
          {this.props.errors[0]}
        </ul>
      </form>
    );
  }


}

export default SignupForm;
