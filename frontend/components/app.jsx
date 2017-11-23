import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavContainer from './nav/nav_container';
import Home from './home';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <NavContainer />
      </header>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </Switch>

      <footer>

      </footer>
    </div>
  );
};

export default App;
