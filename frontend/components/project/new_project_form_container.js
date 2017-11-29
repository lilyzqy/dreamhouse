import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createProject } from '../../actions/project_actions';
import NewProjectForm from './new_project_form';

// const mapSTPs = (state,ownProps) => ({
//   user: state.entities.users[ownProps.match.params.userId],
//   currentUser: state.session.currentUser
// });

const mapDTPs = dispatch => ({
  debugger
  createProject: (formProject) => dispatch(createProject(formProject))
});

export default withRouter(connect(null, mapDTPs)(NewProjectForm));
