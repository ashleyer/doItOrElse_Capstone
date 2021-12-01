import axios from 'axios';

//const endPoint = `https://super-crud.herokuapp.com/todos`;

class TaskModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };
};

export default TaskModel;
