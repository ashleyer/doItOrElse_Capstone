import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




//render(
  //<Router history={hashHistory}>
    // <Route path="/" component={App}/>
  // </Router>
// ),

  // document.getElementById('app')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
