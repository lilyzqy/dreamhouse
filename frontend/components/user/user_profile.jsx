import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserProjectsContainer from '../project/user_projects_container';
import UserFavorites from '../project/user_favorites';

class UserProfile extends React.Component {
  componentWillMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render(){
    let user = this.props.user;
    return(
      <div>
        <div className="profile-background">
          <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
          <div>
            <img src={user.image_url}></img>
            <h2>{user.username}</h2>
          </div>
        </div>

        <Switch>
          <Route path="/users/:userId/projects" component={UserProjectsContainer} />
          <Route path="users/:userId/favorites" component={UserFavorites} />
        </Switch>
      </div>
    );
  }
}
