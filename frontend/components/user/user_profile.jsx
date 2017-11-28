import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserProjectsContainer from '../project/user_projects_container';
import UserFavoritesContainer from '../favorite/user_favorites_container';

class UserProfile extends React.Component {
  componentWillMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  render(){
    let user = this.props.user;
    if(!user){
      return (<div></div>);
    }
    let currentUser = this.props.currentUser;
    return(
      <div>
        <div className="profile-background">
          <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
          <div className="profile-text">
            <img src={user.image_url}></img>
            <h2>{user.username}</h2>
          </div>
        </div>
        <div>
          <Link to={`users/${currentUser.id}/favorites`} >Favorites</Link>
          <Link to={`users/${currentUser.id}/projects`} >Projects</Link>
        </div>
        <Switch>
          <Route path="/users/:userId/projects" component={UserProjectsContainer} />
          <Route path="users/:userId/favorites" component={UserFavoritesContainer} />
        </Switch>
      </div>
    );
  }
}

export default UserProfile;
