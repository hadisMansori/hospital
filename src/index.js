// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from "./app/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
<Provider store = {configureStore().store}>
<PersistGate loading={null} persistor={configureStore().persistor}>  
<App />
</PersistGate>  
</Provider>,
 document.getElementById('root'));
// registerServiceWorker();
 serviceWorker.unregister();
