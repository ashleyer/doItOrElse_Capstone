//should this be conseq instead of conseqs??

const express = require('express');
const router = express.Router();


const consequence = require('../../models/Consequence');


router.get('/test', (req, res) => res.send('consequence route test!'));


router.get('/', (req, res) => {
    Consequence.find()
        .then(consequences => res.json(consequences))
        .catch(err => res.status(404).json({ noconsequencesfound: 'No Consequence found' }));
});


router.get('/:id', (req, res) => {
    Consequence.findById(req.params.id)
        .then(consequence => res.json(consequence))
        .catch(err => res.status(404).json({ noconsequencesfound: 'No Consequence found' }));
});


router.post('/', (req, res) => {
    Consequence.create(req.body)
        .then(consequence=> res.json({ msg: 'Consequence added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Consequence' }));
});


router.put('/:id', (req, res) => {
    Consequence.findByIdAndUpdate(req.params.id, req.body)
        .then(consequence => res.json({ msg: 'Consequence updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update Consequence' })
        );
});

router.delete('/:id', (req, res) => {
    Consequence.findByIdAndRemove(req.params.id, req.body)
        .then(consequence => res.json({ mgs: 'Consequence deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such Consequence' }));
});

module.exports = router;