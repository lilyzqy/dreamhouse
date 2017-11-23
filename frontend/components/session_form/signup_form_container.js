import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignupForm from './signup_form';

import { signup } from '../../actions/session_actions';


const mapSTPs = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    // errors: state.errors.session
  };
};

const mapDTPs = (dispatch) =>{
  return {
    signup: formUser => dispatch(signup(formUser)),
  };
};


export default withRouter(connect(mapSTPs,mapDTPs)(SignupForm));
