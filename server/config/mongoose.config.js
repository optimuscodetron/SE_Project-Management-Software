const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kumarchspiyush:WmXMs5kOS3jIqwun@cluster0.rf3lmty.mongodb.net/LoginWithGoogle?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log("Something went wrong ", err));

