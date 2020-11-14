let express = require('express');
let employee = express.Router();
let allugator = require('../employeeSchema.js');

employee.get('/:name', async (req, res) => {
    try {
        console.log('Searching by name...')
        let employeeName = await allugator.find({ "name": { "$regex": req.params.name, "$options": "i" } });
        return res.json(employeeName);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = employee;
