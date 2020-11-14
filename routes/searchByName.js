let express = require('express');
let getClientName = express.Router();
let User = require('../usrSchema.js');

getClientName.post('/:name', async (req, res) => {
    try {
        let clientName = await User.find({ name: req.params.name });
        return res.json({clientName:clientName[0].name});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getClientName;
