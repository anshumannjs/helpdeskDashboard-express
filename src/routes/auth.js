const { Router } =require("express");
const User =require("../database/UserSchema");
const {comparePassword, hashPassword} =require("../utils/helper")

const router=Router()

router.post("/login", async(req, res)=>{
    const {email, password}=req.body
    const userDb = await User.findOne({email});
    if (userDb){
        if (comparePassword(password, userDb.password)){
            res.send(userDb).status(200)
        }
        else{
            res.status(400).send("Wrong Password");
        }
    }
    else{
        res.status(400).send("User not registered");
    }
})

router.post("/register", async(req, res)=>{
    const {password, email, firstName, lastName} = req.body;
    console.log(req.body)
    const userDb = await User.findOne({email});
    if (userDb){
        res.status(400).send("User already registered");
    }
    else {
        const hashedPassword = hashPassword(password);
        const newUser=await User.create({password: hashedPassword, email, firstName, lastName});
        res.send(newUser).status(200);
    }
})

module.exports=router