import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [] )

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img className="img-logo" alt="" src="https://a.allegroimg.com/s1024/0cdfaa/4591f8ad412fa9afa2b54ffe02c7"></img>
      <h1>WhatsUp</h1>
      <h5>Welcome {username} in WhatsApp Clone</h5>
      
    <form className="app-form">
      <FormControl className="app-formcontrol">
      <Input className="app-input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>

      <IconButton className="app-iconbutton" 
          disabled={!input}
          variant="contained" color="primary" type='submit' onClick={sendMessage} >
        <SendIcon />
      </IconButton>

    </FormControl>
  </form>
      
      <FlipMove className="app-flipmove">
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
