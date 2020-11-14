let express = require('express');
let birthState = express.Router();
let User = require('../employeeSchema.js');

birthState.get('/:state', async (req, res) => {
    try {
        console.log('Requesting database - Birth state...');
        let birthState = await User.find({ state: req.params.state });
        return res.json(birthState);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = birthState;
