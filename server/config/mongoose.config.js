const mongoose = require('mongoose');
const { Workspace } = require('../models/workspace.model');
// const db=process.env.DB

mongoose.connect("mongodb://127.0.0.1:27017/ragnar_SE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Established connection to the database")

})
    .catch(err => console.log("Something went wrong ", err));

