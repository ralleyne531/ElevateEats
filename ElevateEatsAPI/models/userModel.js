const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    lastName: {},
    firstName: {},
    middleName: {},
    phoneNumber: {},
    emailAddress: {},
    //location, height, weight?
});