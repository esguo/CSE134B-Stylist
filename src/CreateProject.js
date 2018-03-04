import React, { Component } from 'react';
import './style/main.css';
import {uuid} from './utils.js';

class CreatProject extends Component {

  constructor(props){
    super(props);
    this.state = {projectName: '', budget: ''};

    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProjectNameChange(event) {
    this.setState({projectName: event.target.value});
  }

  handleBudgetChange(event) {
    this.setState({budget: event.target.value});
  }


  handleSubmit(event) {
    console.log(this.state);
    var data = null;
    // localStorage.getItem("inactiveProject");
    var ip;
    if(data == null | data === ""){
      ip =
      {projects: [],
        showPopup: false,
      editingProjectID: ""
    }
    }
    else{
      ip = JSON.parse(data)
    }
    var temp = {projectName: this.state.projectName, budget: this.state.budget, projectID: uuid()}
    console.log(ip);
    ip.projects.push(temp);
    console.log(ip);
    // localStorage.setItem("inactiveProject", JSON.stringify(ip));
    alert('Success!');
  }


  render() {
    return (
      <div>
      <div className="column" style={{marginTop: 5, height: '100%', width: '100%', flex: '40%'}}>
      <h2 style={{margin: 50}}>Project Name</h2>
      <form onSubmit={this.handleSubmit}>
      <label>
      <input type="text" id="name" placeholder="Name..." value={this.state.value} onChange={this.handleProjectNameChange} />

      <h3> Budget</h3>

      <input type="text" id="budget" placeholder="Budget..." value={this.state.value} onChange={this.handleBudgetChange}  />
      </label>
      <div className="column" style={{height: 100, width: 200, float: 'right', position: 'absolute', bottom: 0, right: 0}}>
      <input type="submit" style={{height: '100%', width: '100%'}} value = "Create"></input>
      </div>
      </form>
      </div>
      <div className="column" style={{flex: '60%'}}>
      <div style={{marginTop: 5, height: '100%', borderStyle: 'solid'}}>
      <h2 style={{margin: 10, height: '5%'}}>Description:</h2>
      <textarea name="Text1" id="desc" style={{margin: 10, width: '95%', height: '80%'}} defaultValue={""} />
      </div>
      </div>
      </div>
    );
  }

}

export default CreatProject;
