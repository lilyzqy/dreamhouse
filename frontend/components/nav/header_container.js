import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import Header from './header';

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

export default withRouter(connect(mapSTPs,mapDTPs)(Header));
