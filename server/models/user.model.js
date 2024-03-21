const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        unique:true,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    //TODO make sure password is never returned with the model data
    password:{
        type: String,
        required:[true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"]
    },
    username:{
        type:String,
        // required:true,
        unique:true
    }
    ,
    workspaces: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace' // Referencing the 'Workspace' model
        }
    ]
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
})

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash =>{
            this.password = hash;
            next();
        });
});
UserSchema.pre('save', function(next){
    if(!this.username){
        this.username=this.email.substring(0,this.email.indexOf('@'));
    }
    next();
});

UserSchema.plugin(uniqueValidator);
module.exports.User = mongoose.model('User', UserSchema);