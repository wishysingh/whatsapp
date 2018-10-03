import React, { Component } from 'react';
import './App.css';
import Navigbar from './navbar';
import { contacts } from './contacts';
import { message } from './message';
import ContactList from './contactList';
import Searchbox from './searchbox';
import Heading from './heading';
import MessageBox from './messageBox';
import ReplyBox from './replyBox';
import contact from './contact';
import { searchContact,clickContact, replyMessage } from './action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return{
      searchfield: state.searchingContact.searchfield,
      clickedname: state.searchingContact.clickedname,
      clickedphone: state.searchingContact.clickedphone,
      replymessage: state.searchingContact.replymessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (event) => dispatch(searchContact(event.target.value)),
      onContactClicking: (name,phone) => dispatch(clickContact(name,phone)),
      onReplyMessage: (event) => dispatch(replyMessage(event))
  }
}

class App extends Component {
  
  constructor()
    {
        super();
        this.state = {
            contacts : contacts,
            inputValue: '',
            onClickPerson:'',
            onClickPhone:'',
            message1 : message
        }
    }
//    message[phone].messagtes
    ReplyMessageValue(event) {
      this.setState({
        inputValue: event.target.value
      })
    }
    onContactClick(name,phone) {
      const{onContactClicking}=this.props;
      this.setState({
        onClickPerson:name,
        onClickPhone:phone
      })
      onContactClicking(name,phone);
    }
    onReply(event){
      const{onReplyMessage}=this.props;
      if(event.keyCode==13){
      onReplyMessage(this.state.inputValue);

      this.setState({
        inputValue: ''
      })
    }
    }

  render() {
    
    const {contacts , message1 , onClickPhone}= this.state;
    const {searchfield, clickedname, replymessage, onReplyMessage, onSearchChange, onContactClick, clickedphone}=this.props;
    console.log(message1);
    console.log(onClickPhone);
    console.log(message1[onClickPhone]);
    const mess = message1[onClickPhone] ? message1[onClickPhone].message : [];
    const filteredContact = contacts.filter(contact =>{
      return contact.name.includes(searchfield);
      
  })
    return (
      <div class="container app">
        <div class="row app-one">
          <div class="col-sm-4 side">
            <div class="side-one">
              <Navigbar/>
              <Searchbox searchChange={onSearchChange}/>
              <ContactList contacts={filteredContact} ContactClick= {this.onContactClick.bind(this)}/>
            </div>
          </div>
          <div class="col-sm-8 conversation">
            <Heading name={clickedname} />
            <MessageBox messages={replymessage} message={mess}/>
            <ReplyBox value={this.state.inputValue} ReplyMessage={this.onReply.bind(this)} ReplyMessageValue={this.ReplyMessageValue.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
