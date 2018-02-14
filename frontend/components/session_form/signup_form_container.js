import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignupForm from './signup_form';
import { clearError } from '../../actions/error_actions';

import { signup, login } from '../../actions/session_actions';


const mapSTPs = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.sessionErrors
  };
};

const mapDTPs = (dispatch) =>{
  return {
    clearError: () => dispatch(clearError()),
    signup: formUser => dispatch(signup(formUser)),
    login: formUser => dispatch(login(formUser))
  };
};


export default withRouter(connect(mapSTPs,mapDTPs)(SignupForm));
