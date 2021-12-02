
import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskContainer from './components/TaskContainer';
import routes from './config/routes';
import './App.css';
import CreateGame from './pages/CreateTask';
import GameList from './pages/ShowTaskList';
import UpdateGame from './pages/UpdateTaskInfo';
import ShowGameDetails from './pages/ShowTaskDetails';


// function App() {
//   return (
//     <div className="body">
//       <Header/>
//       { routes }
//     </div>
//   );
// };
//from book/game walkthrough

function App() {
    return (
      <Router>
        <div>
        <Header/>
          <Route exact path='/' component={TaskList} />
          <Route path='/new-task' component={CreateTask} />
          <Route path='/edit-task/:id' component={UpdateTask} />
          <Route path='/show-task/:id' component={ShowTaskDetails} />
        </div>
      </Router>
    )
}

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
