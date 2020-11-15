let express = require('express');
let registerEmployee = express.Router();
let User = require('../employeeSchema.js');

registerEmployee.post('/', async (req, res) => {
    try {
        let CPF = req.body.CPF;
        const employeeCPF = await User.find({ CPF: CPF });
        
        if (employeeCPF.length === 0) { // funcionario nao existe na tabela
            console.log('Employee not found. Creating new employee.');
            let newEmployee = new User({
                name: req.body.name,
                salary: req.body.salary,
                role: req.body.role,
                state: req.body.state,
                CPF: req.body.CPF,
                date: req.body.date,
                status: req.body.status
            })

            try {
                let createdEmployee = await newEmployee.save();
                return res.json(createdEmployee);
            } catch (err) {
                return res.json({ message: err });
            }
        } else {
            console.log('Employee found.')
            console.log(employeeCPF[0]._id);
            try {
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { name: req.body.name } });
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { salary: req.body.salary } });
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { state: req.body.state } });
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { status: req.body.status } });
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { date: req.body.date } });
                await User.updateOne({ _id: employeeCPF[0]._id }, { $set: { role: req.body.role } });

                let updated = await User.find({ CPF: CPF });
                return res.json(updated);
            } catch (err) {
                res.json({ message: err });
            }
        }
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = registerEmployee;
