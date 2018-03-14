import React, { Component } from 'react';


export default class EditProject extends Component {
  constructor(props) {
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
      alert('Success!');
      console.log(this.state);
      this.props.submitChange(this.state);
      this.props.closePopup();
    }

    render() {
      return (
        <div>
          <button onClick = {this.handleSubmit}> Submit </button>
          <form onSubmit={this.handleSubmit}>
            <label>
              Project Name:
              <input type="text" value={this.state.value} onChange={this.handleProjectNameChange} />

              Budget:
              <input type="text" value={this.state.value} onChange={this.handleBudgetChange} />

            </label>
          </form>
        </div>
      );
    }
}
