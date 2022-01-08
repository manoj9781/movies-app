import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './Components/App';
import './index.css'
import movies from './reducers';


const store = createStore(movies);
console.log("store", store);
console.log("State", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

