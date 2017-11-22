import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import NavContainer from './nav/nav_container';
import Home from './home';

const App = () => {
  return (
    <div>
      <header>
        <NavContainer />
      </header>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};
