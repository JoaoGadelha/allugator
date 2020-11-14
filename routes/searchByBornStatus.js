let express = require('express');
let getClientName = express.Router();
let User = require('../usrSchema.js');

getClientName.post('/:id', async (req, res) => {
    try {
        let clientName = await User.find({ _id: req.params.id });
        return res.json({clientName:clientName[0].name});
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getClientName;
