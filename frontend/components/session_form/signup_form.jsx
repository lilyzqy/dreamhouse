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
      this.props.signup({user});
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
      <div>
        <form>
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
          <input type="checkbox" id="designerCheck" onChange={this.handleCheck()} checked={this.state.designer}></input>
    <label htmlFor="designerCheck">I'm a designer</label>
          <button type='sumbit' onClick={this.handleSubmit()}></button>
        </form>
      </div>
    );
  }


}

export default SignupForm;