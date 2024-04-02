const mongoose = require('mongoose');
const { Workspace } = require('../models/workspace.model');
// const db=process.env.DB

mongoose.connect("mongodb+srv://2021csb1139:iitropar@demo.lehpdcx.mongodb.net/?retryWrites=true&w=majority&appName=demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log("Established connection to the database")

})
    .catch(err => console.log("Something went wrong ", err));

