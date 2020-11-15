 const mongoose = require('mongoose');
 

 const employeeSchema = new mongoose.Schema({
    CPF: String,
    name: String,
    state: String,
    salary: String,
    date: String,
    role: String,
    status: String
}, { collection: 'allugator' });


module.exports = mongoose.model('allugator', employeeSchema);