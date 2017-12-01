import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectDetail from './project_detail';
import { fetchPictures } from '../../actions/picture_actions';

const mapSTPs = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  project: state.entities.projects[ownProps.match.params.projectId]
});
//
const mapDTPs = dispatch => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  fetchPictures:()=> dispatch(fetchPictures()),
  deleteProject:(id)=> dispatch(deleteProject(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(ProjectDetail));
