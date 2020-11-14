const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
let searchByName = require('./routes/searchByName');
let employeeCPF = require('./routes/searchByCPF');
let birthState = require('./routes/searchByBirthState')
let registerDate = require('./routes/searchByRegisterDate')
let roleName = require('./routes/searchByRole')
let salaryRange = require('./routes/searchBySalaryRange')
let status = require('./routes/searchByStatus')
//let getUsr = require('./routes/getUsr');
//let login = require('./routes/login');
//let getShopCart = require('./routes/getShopCart');
//let setShopCart = require('./routes/setShopCart');
//let getClientName = require('./routes/getClientName');
const shutDown = require('./shutdown');

//middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//routes
app.use('/name', searchByName);
app.use('/cpf', employeeCPF);
app.use('/state', birthState);
app.use('/date', registerDate);
app.use('/role', roleName)
app.use('/salary', salaryRange)
app.use('/status', status);
//app.use('/get', getUsr);
//app.use('/login',login);
//app.use('/getShopCart', getShopCart);
//app.use('/setShopCart', setShopCart);
//app.use('/getClientName', getClientName);

//database
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  },() => { console.log('Connected to DB.') });

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);


app.listen((process.env.PORT || 5000),
    () => console.log("Server is running in port " + (process.env.PORT || 5000)));
