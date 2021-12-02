const express = require('express');
const router = express.Router();


const User = require('../../models/User');

//works
router.get('/test', (req, res) => res.send('user route test!'));

//works
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No User found' }));
});

//works
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ nousersfound: 'No User found' }));
});

//works
router.post('/', (req, res) => {
    User.create(req.body)
        .then(user => res.json({ msg: 'User added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this User' }));
});

//works
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(user => res.json({ msg: 'User updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update User' })
        );
});
//works
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
        .then(user => res.json({ mgs: 'User deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such User' }));
});

module.exports = router;