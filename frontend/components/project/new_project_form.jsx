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
      .then(()=> this.props.history.push('/profile/projects'));
    };
  }

  render(){
    return (
      <div>
        <form className="project-form">
          <label>Title:
            <input onChange={this.handleChange('title')}></input>
          </label>
          <label>State:
            <input onChange={this.handleChange('state')}></input>
          </label>
          <label>City:
            <input onChange={this.handleChange('city')}></input>
          </label>
          <button type="submit" onClick={this.handleSubmit()}>Create Project</button>
        </form>
      </div>
    );
  }
}

export default NewProjectForm;
