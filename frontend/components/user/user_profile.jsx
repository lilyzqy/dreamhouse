import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserProjectsContainer from '../project/user_projects_container';
import UserFavoritesContainer from '../favorite/user_favorites_container';
import NewProjectFormContainer from '../project/new_project_form_container';
import NewPictureFormContainer from '../picture/new_picture_form_container';
import ProjectDetailContainer from '../project/project_detail_container';
import Modal from 'react-modal';

class UserProfile extends React.Component {
  constructor(){
    super();
    this.state={
      modalOn: false
    };
  }

  openModal() {
    return ()=> this.setState({modalOn: true});
  }

  closeModal() {
    return ()=> this.setState({modalOn: false});
  }

  render(){
    let currentUser = this.props.currentUser;
    let ProjectLink = undefined;
    let AddButton = undefined;
    let ShowRoute = <Route exact path="/profile" component={UserFavoritesContainer} />;
    if (currentUser.designer === true){
      ShowRoute = <Route exact path="/profile" component={UserProjectsContainer} />;
      if(this.props.location.pathname === '/profile'){
      AddButton = <a onClick={this.openModal()}>Add New Project</a>;
      }
    }

    return(
      <div>
        <div className="profile-background">
          <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"></img>
          <div className="profile-title">
            <div className="profile-text">
              <img src={currentUser.image_url}></img>
              <h2>{currentUser.username}</h2>
            </div>
            {AddButton}
          </div>
        </div>
        <Modal
          isOpen={ this.state.modalOn}
          onRequestClose={ this.closeModal()}
          backDropClosesModal={ true }
          className={"modal-show"}
          overlayClassName={"model-background"}>
          <NewProjectFormContainer closeModal={this.closeModal()}/>
        </Modal>
        <Switch>
          <Route exact path="/profile/projects/:projectId/newPic" component={NewPictureFormContainer} />
          <Route exact path="/profile/projects/:projectId" component={ProjectDetailContainer} />
          {ShowRoute}
          <Route path="/profile/favorites" component={UserFavoritesContainer} />
        </Switch>
      </div>
    );
  }
}

export default UserProfile;
// <Route exact path="/profile/projects/new" component={NewProjectFormContainer} />
// <div>
//   {ProjectLink}
//   <Link to={`users/${currentUser.id}/projects`} >Projects</Link>
// </div>


// ProjectLink = (<Link to={`users/${currentUser.id}/favorites`} >Favorites</Link>);
