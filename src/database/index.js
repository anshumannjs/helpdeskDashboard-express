const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

console.log(process.env.MONGODB_ATLAS_URL)

mongoose.connect(`${process.env.MONGODB_ATLAS_URL}`, {}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})