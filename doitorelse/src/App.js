
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TaskContainer from './components/TaskContainer';
import React, { Component } from 'react';
//import Header from './components/Header';
import MyRoutes from './config/routes';

function App() {
  return (
    <div className="container">
        <Route path='/home' element={ <Home/> }/>
        <Route path='/taskcontainer' component={ TaskContainer }/>
    </div>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
