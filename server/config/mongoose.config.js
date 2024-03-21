const mongoose = require('mongoose');
const { Workspace } = require('../models/workspace.model');
// const db=process.env.DB

mongoose.connect("mongodb://127.0.0.1:27017/SE_Project", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("Established connection to the database")
       
       
           



})
    .catch(err => console.log("Something went wrong ", err));

