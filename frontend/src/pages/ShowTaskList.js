import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import TaskCard from '../components/TaskCard';

<p>hi im task list</p>

// class ShowTaskList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tasks: []
//         };
//     }

//     componentDidMount() {
//         axios
//             .get('http://localhost:8000/api/tasks')
//             .then(res => {
//                 this.setState({
//                     tasks: res.data
//                 })
//             })
//             .catch(err => {
//                 console.log("Error in Task List!");
//             });
//     }

//     render() {
//         const tasks = this.state.tasks;
//         console.log("PrintTask: " + tasks);
//         let taskList;

//         if(!tasks) {
//             taskList = "There is no record of any tasks"
//         } else {
//             taskList = tasks.map((task, k) => 
//                 <TaskCard task={task} key={k} />
//             );
//         }
        
//         return(
//             <div>
//                 <Link to="/create-task">
//                     Add New Task
//                 </Link>
//                 <div>
//                     {taskList}
//                 </div>
//             </div>
//         )
//     }
// }

// export default ShowTaskList;