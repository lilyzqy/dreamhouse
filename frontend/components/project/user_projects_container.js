import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUserProjects } from '../../actions/project_actions';
import UserProjects from './user_projects';

const mapSTPs = (state) => ({
  projects: state.entities.projects
});

const mapDTPs = dispatch => ({
  fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId))
});

export default withRouter(connect(mapSTPs, mapDTPs)(UserProjects));
