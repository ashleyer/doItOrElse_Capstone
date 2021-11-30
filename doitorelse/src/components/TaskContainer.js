import { Component } from 'react'
//import TaskModel from '../models/Task'
//import Task from '../components/Task'
//import TaskDashboard from '../components/TaskDashboard'
//import CreateTaskForm from '../components/CreateTaskForm'

class TaskContainer extends Component {
    constructor() {
        super()
        this.state = {
            tasks: [],
            editingTaskId: null,
            editing: false,
            taskCount: 0
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        TaskModel.all().then((res) => {
            this.setState({
                tasks: res.data.tasks,
                task: '',
                taskCount: res.data.tasks.filter(task => task.completed === false).length
            })
        })
    }

    createTask = (task) => {
        let newTask = {
            body: task,
            completed: false
        }
        TaskModel.create(newTask).then((res) => {
            let tasks = this.state.tasks
            let newTasks = tasks.push(res.data)
            this.setState({ newTasks })

        })
    }

    updateTask = (taskBody, taskId) => {
        function isUpdatedTask(task) {
            return task._id === taskId;
        }
        TaskModel.update(taskId, taskBody).then((res) => {
            let tasks = this.state.tasks
            tasks.find(isUpdatedTask).body = taskBody.body
            this.setState({ tasks: tasks })
        })
    }


    deleteTask = (task) => {
        TaskModel.delete(task).then((res) => {
            let tasks = this.state.tasks.filter(function (task) {
                return task._id !== res.data._id
            });
            this.setState({ tasks })
        })
    }

    markComplete = (taskId, complete) => {
        console.log(complete)
        function isUpdatedTask(task) {
            return task._id === taskId;
        }
        let tasks = this.state.tasks;
        tasks.find(isUpdatedTask).complete = complete
        this.setState({
            tasks: tasks
        })
        TaskModel.update(taskId, complete).then((res) => {
            if (complete.completed) {
                this.setState({
                    taskCount: this.state.taskCount - 1
                })
            } else {
                this.setState({
                    taskCount: this.state.taskCount + 1
                })
            }
            return res.data.completed
        })
    }

    clearCompleted = () => {
        console.log("CLEAR!")

        let filteredTasks = this.state.tasks
            .filter(task => {
                console.log("in filter")
                if (task.completed === true) {
                    console.log("bye!")
                    TaskModel.delete(task)
                }
                return true

            })
        this.setState({
            todos: filteredTasks
        })

    }

    render() {
        return (
            <div className='tasksComponent'>
                <CreateTaskForm
                    createTask={this.createTask}
                />
                <Tasks
                    tasks={this.state.tasks}
                    onDeleteTask={this.deleteTask}
                    onUpdateTask={this.updateTask}
                    markComplete={this.markComplete}
                />
                <TaskDashboard
                    taskCount={this.state.taskCount} />

            </div>
        )
    }
}

export default TaskContainer