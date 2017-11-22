import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

import { login, signup } from '../../actions/session_actions';


const mapSTPs = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDTPs = (dispatch,ownProps) =>{
  let formType = ownProps.match.path === '/login' ? 'login' : 'signup';
  let action = formType === 'login' ? login : signup;
  return {
    action: formUser => dispatch(action(formUser)),
    formType
  };
};


export default withRouter(connect(mapSTPs,mapDTPs)(SessionForm));
