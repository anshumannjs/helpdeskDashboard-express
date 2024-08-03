const express=require("express")
const mongoose=require("mongoose")
const auth=require("./routes/auth")
const ticket=require("./routes/ticket")
const cors=require("cors")
const User = require("./database/UserSchema")

require("./database/index")

const app=express()
app.use(cors({
    headers: ["Content-Type"],
    credentials: true,
    origin: "*"
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });
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