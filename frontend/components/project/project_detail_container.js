import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchProject from '../../actions/project_actions';
import ProjectDetail from './project_detail';

const mapSTPs = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});
//
const mapDTPs = dispatch => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId))
});

export default withRouter(connect(mapSTPs, mapDTPs)(ProjectDetail));
