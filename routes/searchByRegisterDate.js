let express = require('express');
let registerDate = express.Router();
let User = require('../employeeSchema.js');

registerDate.get('/:date', async (req, res) => {
    try {
        let rawDate = req.params.date;
        let processedDate = [];
        let j = 0;
        for (let i = 0; i < rawDate.length+2; i++) {
            processedDate[i] = rawDate[j];
            if (i === 2 || i === 5) {
                processedDate[i] = '/'
            } else {
                j++;
            }
        }
        


        let registerDate = await User.find({ date: processedDate.join("") });
        return res.json(registerDate);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = registerDate;
