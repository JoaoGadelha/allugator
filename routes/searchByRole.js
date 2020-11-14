let express = require('express');
let getRole = express.Router();
let User = require('../employeeSchema.js');

getRole.get('/:role', async (req, res) => {
    try {
        let roleName = await User.find({ "role": { "$regex": req.params.role, "$options": "i" } });
        return res.json(roleName);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = getRole;
