import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import Nav from './nav';

const mapSTPs = (state) => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.currentUser),
  };
};

const mapDTPs = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapSTPs,mapDTPs)(Nav));
