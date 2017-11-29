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
      <div className='session-page'>
        <img src= "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&w=800&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <form className='session-form'>
          <h1>Sign up</h1>
          <label>Username:
            <input type='text' onChange={this.handleChange('username')}></input>
          </label>
          <label>Email:
            <input type='text' onChange={this.handleChange('email')}></input>
          </label>
          <label>Password:
            <input type='password' onChange={this.handleChange('password')}></input>
          </label>
          <label htmlFor="designerCheck" id="session-check">
            <input type="checkbox" id="designerCheck" onChange={this.handleCheck()} checked={this.state.designer}></input>
            I'm a designer</label>
          <div className="session-button">
            <button type='sumbit' onClick={this.handleSubmit()}>Sign Up</button>
          </div>
          <ul>
            {this.props.errors}
          </ul>
        </form>
      </div>
    );
  }


}

export default SignupForm;
