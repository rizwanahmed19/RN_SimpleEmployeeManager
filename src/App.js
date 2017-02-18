import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './reducers';
import Router from './router';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: "AIzaSyD73ShUsdMQORWxdbGuH_hreVrS9kjJKV8",
	    authDomain: "rnmanager-70e3e.firebaseapp.com",
	    databaseURL: "https://rnmanager-70e3e.firebaseio.com",
	    storageBucket: "rnmanager-70e3e.appspot.com",
	    messagingSenderId: "540214172325"
	  };
	  firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}> 
				<Router />
			</Provider>
		);
	}
}

export default App;