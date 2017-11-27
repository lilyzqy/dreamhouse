import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPictures } from '../../actions/picture_actions';
import PicAll from './pic_all';

const mapSTPs = (state) => ({
  pictures: state.entities.pictures
});

const mapDTPs = dispatch => ({
  fetchPictures: () => dispatch(fetchPictures())
});

export default withRouter(connect(mapSTPs, mapDTPs)(PicAll));
