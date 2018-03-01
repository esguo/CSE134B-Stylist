import React, { Component } from 'react';
import './style/main.css';

class Project extends Component {
  render() {
    var projectType = this.props.type;
    console.log(projectType)
    if(projectType === "ip"){
      return <InactiveProject param = {this.props}/>;
    }
    else if(projectType === "cp"){
      return <CompletedProject param = {this.props}/>;
    }
    else if(projectType === "ap"){
      return <ActiveProject param = {this.props}/>;
    }

    return (
      <WrongType param = {this.props}/>
    )
  }


}


function InactiveProject(props){

  var parameters = props.param;
  // <Project haha={123} type = {"ip"} projectID = {1234} projectName = {"New Hair"} budget = {50}/>
  return (
    <div className="active_project" id={parameters.projectID}>
    <p className="project_name"> {parameters.projectName} </p>
    <p className="budget">Budget: {parameters.budget}</p>
    <p className="find_stylist">Find Your Personal Stylist</p>
    <button onClick="finishIt2(this)" value={parameters.projectID} >Make Active</button>
    </div>
  )

}

function ActiveProject(props){
  var parameters = props.param;
  // <Project haha={123} type = {"ap"} projectID = {1234} projectName = {"New Hair"}
  // budget = {50} endDate={"2/28/2018"} progressUrl={"something"} stylist={"Jason"} associate={"Eddie"}/>
  return (
    <div className="active_project" id={parameters.projectID}>
    <p className="project_name"> {parameters.projectName} </p>
    <p className="start_date">Start Date: {parameters.endDate}</p>
    <p className="budget">Budget: {parameters.budget}</p>
    <p className="image"><img src={require('./photos/progress.png')} alt="Progress Image" className="progress"></img></p>
    <p className="stylist_associate">Stylist: {parameters.stylist} <br></br>Associate: {parameters.associate} </p>
    <button onClick="finishIt(this)" value={parameters.projectID}>finish</button>
    </div>
  )


}

function CompletedProject(props){
    var parameters = props.param;
    // <Project haha={123} type = {"cp"} projectID = {1234} projectName = {"New Hair"} budget = {50}
    // endDate={"2/12/2018"} stylist={"Jason"} associate={"Eddie"}/>
  return (
    <div className="active_project">
    <p className="project_name"> {parameters.projectName} </p>
    <p className="start_date">End Date: {parameters.endDate}</p>
    <p className="budget">Budget: {parameters.budget}</p>
    // <p class="image"> this.convertImageUrlToHtml()</p>
    

    <p className="stylist_associate">Stylist: {parameters.stylist} <br></br>Associate: {parameters.associate} </p>
    </div>
  )
}

function WrongType(props){
  console.log(props.param);
  return (
    <p> The input type is {props.param.type} and we do not support it</p>
  )
}

export default Project;
