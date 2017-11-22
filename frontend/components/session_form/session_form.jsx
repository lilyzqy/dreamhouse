import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
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

  handleSubmit(e){
    e.preventDefault();
    return () => {
      const user = this.state;
      this.props.action({user});
    };
  }

  handleChange(field){
    return (e) =>{
      this.setState({

      });
    };
  }

  render(){
    return (
      <div>Hi</div>
    );
  }


}

export default SessionForm;
