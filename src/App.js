import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC1Fwn30paUNhBNzCvY7upFtrarZbGXmZ8',
      authDomain: 'manager-4e782.firebaseapp.com',
      databaseURL: 'https://manager-4e782.firebaseio.com',
      projectId: 'manager-4e782',
      storageBucket: 'manager-4e782.appspot.com',
      messagingSenderId: '910235844910'
    };
    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
