import React from 'react';
import Chatbot from 'react-chatbot-kit'
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import './App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function BotApp() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
      </header>

    </div>
  );
}

export default BotApp;
