import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createPicture } from '../../actions/picture_actions';
import NewPictureForm from './new_picture_form';

// const mapSTPs = (state,ownProps) => ({
//   user: state.entities.users[ownProps.match.params.userId],
//   currentUser: state.session.currentUser
// });

const mapDTPs = dispatch => ({
  createPicture: (formPicture) => dispatch(createPicture(formPicture))
});

export default withRouter(connect(null, mapDTPs)(NewPictureForm));
