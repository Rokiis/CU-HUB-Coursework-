import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './components/Firebase/firebase';
import FirebaseContext from './components/Firebase/context';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

  serviceWorker.unregister();