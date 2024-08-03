const express=require("express")
const mongoose=require("mongoose")
const auth=require("./routes/auth")
const ticket=require("./routes/ticket")
const cors=require("cors")
const User = require("./database/UserSchema")

require("./database/index")

const app=express()
app.use(cors({
    origin: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/auth", auth)
app.use("/ticket", ticket)

app.get("/:id", async(req, res)=>{
    const {id}=req.params
    const user=await User.findById(id)
    console.log(user)
    res.send(user).status(200)
})

app.get("/", (req, res)=>{
    res.send("hello")
})

app.listen(8080, ()=>{
    console.log(`Server has started on http://localhost:8080`)
})
// mongoose.connect("mongodb://127.0.0.1:3001").then(()=>{
// })