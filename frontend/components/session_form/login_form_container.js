import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginForm from './login_form';

import { login } from '../../actions/session_actions';


const mapSTPs = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.sessionErrors
  };
};

const mapDTPs = (dispatch) =>{

  return {
    login: formUser => dispatch(login(formUser)),
  };
};


export default withRouter(connect(mapSTPs,mapDTPs)(LoginForm));
