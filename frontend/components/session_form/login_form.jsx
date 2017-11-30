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

  render(){
    return (
      <form className='session-form'>
        <h1>Log In</h1>
          <input placeholder="Email" type='text' onChange={this.handleChange('email')}></input>
          <input placeholder="Password" type='password' onChange={this.handleChange('password')}></input>
        <div className="session-button">
          <button type='sumbit' onClick={this.handleSubmit()}>Log In</button>
        </div>
        <ul>
          {this.props.errors[0]}
        </ul>
      </form>
    );
  }


}

export default LoginForm;
