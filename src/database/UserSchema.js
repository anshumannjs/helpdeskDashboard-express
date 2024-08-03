const mongoose =require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    lastName: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true
    }
})

const User=mongoose.model("User", UserSchema)
module.exports =User