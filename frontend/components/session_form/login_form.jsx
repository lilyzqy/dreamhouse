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

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      if(this.props.history === '/home'){
        this.props.history.push('/');
      }
      this.props.history.back();
    }
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const user = this.state;
      this.props.login({user});
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
      <div>
        <form>
          <h1>Log In</h1>
          <label>Email:
            <input type='text' onChange={this.handleChange('email')}></input>
          </label>
          <label>Password:
            <input type='password' onChange={this.handleChange('password')}></input>
          </label>
          <button type='sumbit' onClick={this.handleSubmit()}></button>
        </form>
      </div>
    );
  }


}

export default LoginForm;
