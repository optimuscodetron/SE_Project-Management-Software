const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const {MongoClient}=require('mongodb')

const tarnsporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, secure: false,
  requireTLS: true,
  auth:
  {
      user: '2021csb1107@iitrpr.ac.in',
      pass: 'KUSHagra08092004@'
  }
})


module.exports.userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
      res.status(400).json({ error: "Please Enter Your  Registered Email" })
  }


  try {
      const presuer = await User.findOne({ email: email });

      if (presuer) {
          const OTP = Math.floor(100000 + Math.random() * 900000);

          const existEmail = await userotp.findOne({ email: email });


          if (existEmail) {
              const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                  otp: OTP
              }, { new: true }
              );
              await updateData.save();

              const mailOptions = {
                  from: process.env.EMAIL,
                  to: email,
                  subject: "Sending Email For Otp Validation",
                  text: `OTP:- ${OTP}`
              }


              tarnsporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.log("error", error);
                      res.status(400).json({ error: "email not send" })
                  } else {
                      console.log("Email sent", info.response);
                      res.status(200).json({ message: "Email sent Successfully" })
                  }
              })

          } else {

              const saveOtpData = new userotp({
                  email, otp: OTP
              });

              await saveOtpData.save();
              const mailOptions = {
                  from: process.env.EMAIL,
                  to: email,
                  subject: "Sending Email For Otp Validation",
                  text: `OTP:- ${OTP}`
              }

              tarnsporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.log("error", error);
                      res.status(400).json({ error: "email not send" })
                  } else {
                      console.log("Email sent", info.response);
                      res.status(200).json({ message: "Email sent Successfully" })
                  }
              })
          }
      } else {
          res.status(400).json({ error: "This User Not Exist In our Database" })
      }
  } catch (error) {
      res.status(400).json({ error: "Invalid Details", error })
  }
};
exports.userLogin = async (req, res) => {
  const { email, otp } = req.body;

  if (!otp || !email) {
      res.status(400).json({ error: "Please Enter Your OTP and email" })
  }

  try {
      const otpverification = await userotp.findOne({ email: email });

      if (otpverification.otp === otp) {
          const preuser = await User.findOne({ email: email });
          let x = await User.findOne({ email: email });
          // console.log(x);

          // token generate
          // const token = await preuser.generateAuthtoken();
          res.status(200).json({ message: "Verified Sucessfully",myuser:x});

      } else {
          res.status(400).json({ error: "Invalid Otp" })
      }
  } catch (error) {
      res.status(400).json({ error: "Invalid Details", error })
  }
}

module.exports.create = (req, res) => {
  User.create(req.body)
    .then((user) => {
      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY
      );
      res
        .cookie("usertoken", userToken, {
          httpOnly: true,
        })
        .json({ message: "Success!", user: user });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.findAll = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

module.exports.findById = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

module.exports.delete = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((r) => res.json(r))
    .catch((err) => res.json(err));
};

module.exports.update = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((r) => res.json(r))
    .catch((err) => res.status(400).json(err));
};

module.exports.login = async (req, res) => {
  const errorMessage = "Email or password is incorrect";

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      throw new Error(errorMessage);
    }
    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!correctPassword) {
      console.log("Password incorrect for: " + req.body.email);
      throw new Error(errorMessage);
    }
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    );
    res
      .cookie("usertoken", userToken, {
        httpOnly: true,
      })
      .json({ message: "Success!", user: user });
  } catch {
    res.status(401).json({ message: errorMessage });
  }
};
exports.changeinfo = async (req, res) => {
  const email = req.body.email;
  let password=req.body.newPassword;
  console.log(password)
  
  const client=new MongoClient('mongodb+srv://Kushagra_18:bDFTOPZeMaygXAE3@cluster0.mxxglsz.mongodb.net/Demo?retryWrites=true&w=majority')

  try {
  //   if (!password || !email) {
  //     res.status(400).json({ error: "Please Enter your new password" })
  // }
      await client.connect();
      const database = client.db('Demo');
      const collection = database.collection('users');
      // console.log(collection);
      const data = await User.findOne({ email: email });
      console.log(data._id);
      console.log(password)
      const hashedPassword = await bcrypt.hash(password, 10);
      // bcrypt.hash(password, 10)
      // .then(hash =>{
      //     password = hash;
      //     next();
      // });
      const result = await collection.updateOne(
          {
              _id: data._id
          }, {
          $set: {password:hashedPassword}
      },
      {
        runValidators:true,
        new:true
      }
      );
      // console.log(data.password)
      const us=await User.findOne({email:email});
      console.log(us.password);
      
  
      // res.status(200).json({ message: "Password Reset Successfully"});

      // console.log(data1);

  }
  finally {
      await client.close();
  }
  const us=await User.findOne({email:email});

  res.status(200).json({
      // success: true
      message:"password reset successfully",
      myuser:us
  })
}
module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.json({ message: "Logged out successfully" });
};
