import React, { Component } from 'react';
import './App.css';
import Navigbar from './navbar';
import { contacts } from './contacts';
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
      replymessage: state.searchingContact.replymessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (event) => dispatch(searchContact(event.target.value)),
      onContactClicking: (name) => dispatch(clickContact(name)),
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
            onClickPerson:''
        }
    }
    ReplyMessageValue(event) {
      this.setState({
        inputValue: event.target.value
      })
    }
    onContactClick(name) {
      const{onContactClicking}=this.props;
      this.setState({
        onClickPerson:name
      })
      onContactClicking(name);
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
    
    const {contacts}= this.state;
    const {searchfield, clickedname, replymessage, onReplyMessage, onSearchChange, onContactClick}=this.props;
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
              <ContactList contacts={filteredContact} ContactClick= {onContactClick}/>
            </div>
          </div>
          <div class="col-sm-8 conversation">
            <Heading name={clickedname} />
            <MessageBox message={replymessage} chatHistory={}/>
            <ReplyBox value={this.state.inputValue} ReplyMessage={this.onReply.bind(this)} ReplyMessageValue={this.ReplyMessageValue.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
