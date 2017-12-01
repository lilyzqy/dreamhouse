import React from 'react';

class NewProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      state: "",
      city: ""
    };
  }

  handleChange(field){
    return (e) =>{
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }


  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const formProject = this.state;
      this.props.createProject(formProject)
      .then((project)=> this.props.history.push(`/profile/projects/${project.id}`)).then(this.props.closeModal);
    };
  }

  render(){
    return (
      <div>
        <form className="project-form">
            <input placeholder="title" onChange={this.handleChange('title')}></input>
            <input placeholder="state" onChange={this.handleChange('state')}></input>
            <input placeholder="city" onChange={this.handleChange('city')}></input>
          <button type="submit" onClick={this.handleSubmit()}>Create Project</button>
        </form>
      </div>
    );
  }
}

export default NewProjectForm;
