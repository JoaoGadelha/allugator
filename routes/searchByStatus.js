let express = require('express');
let getStatus = express.Router();
let User = require('../employeeSchema.js');

getStatus.get('/:status', async (req, res) => {
    try {
        let status = await User.find({ status: req.params.status });
        return res.json(status);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getStatus;
