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
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log('HELLO');
  //   if (nextProps.loggedIn) {
  //     if(this.props.location.pathname === '/home'){
  //       this.props.history.push('/users/');
  //     }
  //     this.props.history.back();
  //   }
  // }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const user = this.state;
      this.props.login(user).then(()=>{
        this.props.history.go(-4);
      });
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
      <div className='session-page'>
        <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=634&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
        <form className='session-form'>
          <h1>Log In</h1>
          <label>Email:
            <input type='text' onChange={this.handleChange('email')}></input>
          </label>
          <label>Password:
            <input type='password' onChange={this.handleChange('password')}></input>
          </label>
          <div className="session-button">
            <button type='sumbit' onClick={this.handleSubmit()}>Log In</button>
          </div>
        </form>
      </div>
    );
  }


}

export default LoginForm;
