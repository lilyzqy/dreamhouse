import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProjectDetail from './project_detail';

const mapSTPs = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});
//
// const mapDTPs = dispatch => ({
//   fetchUserProjects: (userId) => dispatch(fetchUserProjects(userId))
// });

export default withRouter(connect(mapSTPs, null)(ProjectDetail));
