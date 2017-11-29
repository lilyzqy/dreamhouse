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
      console.log(this.props);
      this.props.createProject(formProject)
      .then((project)=> this.props.history.push(`/profile/projects/${project.id}`));
    };
  }

  render(){
    return (
      <div>
        <form className="project-form">
          <label>Title:
            <input onChange={this.handleChange('title')}></input>
          </label><br/>
          <label>State:
            <input onChange={this.handleChange('state')}></input>
          </label><br/>
          <label>City:
            <input onChange={this.handleChange('city')}></input>
          </label><br/>
          <button type="submit" onClick={this.handleSubmit()}>Create Project</button>
        </form>
      </div>
    );
  }
}

export default NewProjectForm;
