import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import TaskContainer from '../components/TaskContainer';

function App() {
    return (
        <div className="container">
            <Route path='/home' element={<Home />} />
            <Route path='/taskcontainer' component={TaskContainer} />
        </div>
    );
};
