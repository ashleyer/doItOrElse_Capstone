

const express = require('express');
const router = express.Router();

// Load Task model
const Task = require('../../models/Task');

//works
router.get('/test', (req, res) => res.send('task route test!'));

//works
router.get('/', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ notasksfound: 'No Task found' }));
});

//works
router.get('/:id', (req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(404).json({ notasksfound: 'No Task found' }));
});

//works
router.post('/', (req, res) => {
    Task.create(req.body)
        .then(task => res.json({ msg: 'Task added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this task' }));
});

//works
router.put('/:id', (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(task => res.json({ msg: 'Task updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});
//works
router.delete('/:id', (req, res) => {
    Task.findByIdAndRemove(req.params.id, req.body)
        .then(task => res.json({ mgs: 'Task deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such Task' }));
});

module.exports = router;