import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createPicture, fetchPictures } from '../../actions/picture_actions';
import NewPictureForm from './new_picture_form';

// const mapSTPs = (state,ownProps) => ({
//   user: state.entities.users[ownProps.match.params.userId],
//   currentUser: state.session.currentUser
// });

const mapDTPs = dispatch => ({
  createPicture: (id,formPicture) => dispatch(createPicture(id,formPicture)),
  fetchPictures: ()=> dispatch(fetchPictures)
});

export default withRouter(connect(null, mapDTPs)(NewPictureForm));
