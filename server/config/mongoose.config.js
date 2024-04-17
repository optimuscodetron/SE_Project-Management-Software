const mongoose = require("mongoose");
const { Workspace } = require("../models/workspace.model");
// const db=process.env.DB

mongoose
  .connect(
    "mongodb+srv://Kushagra_18:bDFTOPZeMaygXAE3@cluster0.mxxglsz.mongodb.net/Demo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Established connection to the database");
  })
  .catch((err) => console.log("Something went wrong ", err));
