let express = require('express');
let getSalary = express.Router();
let User = require('../employeeSchema.js');

getSalary.get('/:salary', async (req, res) => {
    try {
        let salary = await User.find({ salary: req.params.salary });
        return res.json(salary);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getSalary;
