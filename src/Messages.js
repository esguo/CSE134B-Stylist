import React, { Component } from 'react';
import './style/message.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './actions/projectActions'


class Messages extends Component {

  constructor(props){
    super(props);
    this.state = {messages: props.msg};
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(){
    var input = document.getElementById("inputBox").value;

    this.props.actions.sendMessage(1, input);
  }

  render() {
    return (
      <div className="container" style={{padding: '0px', height: '100%'}}>
        <div style={{width: '25%', borderStyle: 'solid'}}>
          <h3>Eddie Doe</h3>
          <h4>How about this st...</h4>
        </div>
        <div style={{width: '75%', height:'100%', borderStyle: 'solid', display:'block', overflow:'hidden'}}>
          <div className="row" style={{height: 'calc(100% - 80px)', width: '100%'}}>
            <div className="content" id="content" >
              <GetMessages data = {this.props.messages} />
            </div>
            <div className="row" style={{height: '80px', width: '100%'}}>
              <div className="input_and_send">
                <div className="column" style={{borderTop: 'solid', height: '100%', width: '85%'}}>
                  <input style={{height: '100%', width: '100%'}} className="text_input" placeholder="Please say something..." id="inputBox" type="input" />
                </div>
                <div className="column" style={{height: '100%', width: '15%', borderTop: 'solid'}}>
                  <button type="button" className="send" onClick={this.sendMessage} style={{height: '100%', width: '100%'}}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const GetMessages = (props) => {
  console.log(props.data);
  if(props.data.length === 0){
    return null;
  }
  return(
    <div>
      {props.data.map((message, i) => <MessageBox {...message} />)}
    </div>
  )
}

const MessageBox = (props) => {
  var i = 1;
  console.log("i: ");
  console.log(i);
  console.log(props);
  if(props.page === 0)
    return(
      <div className="chatBox1">
        <p className="chatContent">{props.msg}</p>
      </div>
    )
  else return(
    <div className="chatBox">
      <p className="chatContent">{props.msg}</p>
    </div>
  )
}


function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    messages: state.messageReducer.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
