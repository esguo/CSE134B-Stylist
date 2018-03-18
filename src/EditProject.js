import React, { Component } from 'react';


export default class EditProject extends Component {
  constructor(props) {
      super(props);
      this.state = {projectName: '', budget: '', description: ''};

      this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
      this.handleBudgetChange = this.handleBudgetChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    handleProjectNameChange(event) {
      this.setState({projectName: event.target.value});
    }

    handleBudgetChange(event) {
      this.setState({budget: event.target.value});
    }

    handleDescriptionChange(event) {
      console.log('new description is:',  event.target.value);
      this.setState({description: event.target.value});
    }

    handleSubmit(event) {
      alert('Success!');
      console.log(this.state);
      this.props.submitChange(this.state);
      this.props.closePopup();
    }

    render() {
      if(this.props.type == '1'){
        return (
          <div>
            <button onClick = {this.handleSubmit}> Submit </button>
            <form onSubmit={this.handleSubmit}>
              <label>
                Description:
                <input type="text" value={this.state.value} onChange={this.handleDescriptionChange} />

              </label>
            </form>
          </div>
        );
      }
      return (
        <div>
          <button onClick = {this.handleSubmit}> Submit </button>
          <form onSubmit={this.handleSubmit}>
            <label>
              Project Name:
              <input type="text" value={this.state.value} onChange={this.handleProjectNameChange} />

              Budget:
              <input type="text" value={this.state.value} onChange={this.handleBudgetChange} />

              Description:
              <input type="text" value={this.state.value} onChange={this.handleDescriptionChange} />

            </label>
          </form>
        </div>
      );
    }
}
