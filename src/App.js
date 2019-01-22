import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
componentWillMount() {
  var config = {
    apiKey: "AIzaSyDVKZZWXD9tojbRVPtV5WjKPtUvLAmjJqA",
    authDomain: "manager-de583.firebaseapp.com",
    databaseURL: "https://manager-de583.firebaseio.com",
    projectId: "manager-de583",
    storageBucket: "manager-de583.appspot.com",
    messagingSenderId: "1061603382903"
  };
  firebase.initializeApp(config);
}


  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm/>
      </Provider>
    );
  }
}

export default App;