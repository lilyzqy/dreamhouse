import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HeaderContainer from './nav/header_container';
import PicDetailContainer from './picture/pic_detail_container';
import PicAllContainer from './picture/pic_all_container';
import UserProfileContainer from './user/user_profile_container';
import UserProjectsContainer from './project/user_projects_container';
import ProjectDetailContainer from './project/project_detail_container';
import Home from './home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
        <Route exact path="/pictures/:picId" component={PicDetailContainer} />
        <Route path="/pictures" component={PicAllContainer} />
        <ProtectedRoute path="/profile" component={UserProfileContainer} />
        <Route path="/projects/:projectId" component={ProjectDetailContainer} />
        <Route exact path="/users/:userId/projects" component={UserProjectsContainer} />
      </Switch>

      <footer>

      </footer>
    </div>
  );
};

export default App;



// <AuthRoute path="/login" component={LoginFormContainer} />
// <AuthRoute path="/signup" component={SignupFormContainer} />
