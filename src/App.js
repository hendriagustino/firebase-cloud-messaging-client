import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import messaging from './FirebaseConfig';

export default class App extends Component {
  componentDidMount() {
    messaging.getToken().then((firebaseToken) => {
      console.log('firebaseToken->', firebaseToken);

      messaging.onMessage((payload) => {
        console.log('payload->', payload);

        let message = {
          title: payload.notification.title,
          text: payload.notification.body,
        };
        console.log('message->', message);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
