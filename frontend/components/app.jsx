import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import NavContainer from './nav/nav_container';
import Home from './home';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
      </header>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>

      <footer>

      </footer>
    </div>
  );
};

export default App;

// <NavContainer />
