let express = require('express');
let deleteEmployee = express.Router();
let User = require('../employeeSchema.js');

deleteEmployee.get('/:cpf', async (req, res) => {
    try {
        let deleted = await User.deleteOne({ CPF: req.params.cpf });
        return res.json(deleted);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = deleteEmployee;
