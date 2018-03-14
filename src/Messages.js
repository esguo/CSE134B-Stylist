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

    this.props.actions.sendMessage(input);
    var messages = [];
    messages = JSON.parse(localStorage.getItem("msg"));
    if(!messages)
    var messages = [];

    if(input === "")  return;
    messages.push({id:"1", msg:input});
    console.log(messages);
    localStorage.setItem('msg', JSON.stringify(messages));
    var chatBox = "<div class=\"chatBox\"><p class=\"chatContent\">"+input+"</p></div>";
    document.getElementById("inputBox").value =  "";
    document.getElementById("content").innerHTML += chatBox;
  }

  componentDidMount(){
    var messages = [];
    //localStorage.clear();
    messages = JSON.parse(localStorage.getItem("msg"));
    console.log(messages);
    if (!messages)
    return;
    for(var i=0; i<messages.length; i++){
      var input = messages[i].msg;
      if(messages[i].id === "1")
      var chatBox = "<div class=\"chatBox\"><p class=\"chatContent\">"+input+"</p></div>";
      else
        chatBox = "<div class=\"chatBox1\"><p class=\"chatContent\">"+input+"</p></div>";
      document.getElementById("content").innerHTML += chatBox;
    }
  }

  render() {
    return (
      <div className="container" style={{padding: '0px', height: '100%'}}>
        <div style={{width: '25%', borderStyle: 'solid'}}>
          <h3>Jane Doe</h3>
          <h4>How about this st...</h4>
        </div>
        <div style={{width: '75%', borderStyle: 'solid'}}>
          <div className="row" style={{height: 'calc(100% - 80px)', width: '100%'}}>
            <div className="content" id="content" />
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

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
