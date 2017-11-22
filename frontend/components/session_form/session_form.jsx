import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
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

    };
  }



}

export default SessionForm;
