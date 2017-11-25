import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HeaderContainer from './nav/header_container';
import PicDetailContainer from './picture/picdetail_container';
import Home from './home';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/pictures/:picId" component={PicDetailContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>

      <footer>

      </footer>
    </div>
  );
};

export default App;
