let express = require('express');
let employeeCPF = express.Router();
let allugator = require('../employeeSchema.js');

employeeCPF.get('/:cpf', async (req, res) => {
    try {
        console.log('Requesting database - CPF...');
        const employeeCPF = await allugator.find({CPF: req.params.cpf});
        if (employeeCPF.length === 0) {
            console.log('Employee not found.')
        } else {
            console.log('Employee data: ' + employeeCPF)
        }
        return res.json(employeeCPF);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = employeeCPF;
