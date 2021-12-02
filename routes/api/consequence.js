

const express = require('express');
const router = express.Router();


const Consequence = require('../../models/Consequence');

//works
router.get('/test', (req, res) => res.send('consequence route test!'));

//works
router.get('/', (req, res) => {
    Consequence.find()
        .then(consequences => res.json(consequences))
        .catch(err => res.status(404).json({ noconsequencesfound: 'No Consequence found' }));
});

//works
router.get('/:id', (req, res) => {
    Consequence.findById(req.params.id)
        .then(consequence => res.json(consequence))
        .catch(err => res.status(404).json({ noconsequencesfound: 'No Consequence found' }));
});

//not works
router.post('/', (req, res) => {
    Consequence.create(req.body)
        .then(consequence=> res.json({ msg: 'Consequence added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Consequence' }));
});

//works
router.put('/:id', (req, res) => {
    Consequence.findByIdAndUpdate(req.params.id, req.body)
        .then(consequence => res.json({ msg: 'Consequence updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update Consequence' })
        );
});
//works
router.delete('/:id', (req, res) => {
    Consequence.findByIdAndRemove(req.params.id, req.body)
        .then(consequence => res.json({ mgs: 'Consequence deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such Consequence' }));
});

module.exports = router;