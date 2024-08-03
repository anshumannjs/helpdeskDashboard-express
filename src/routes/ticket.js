const { Router } =require("express");
const Ticket =require("../database/TicketSchema");

const router=Router()

router.post("/new", async(req, res)=>{
    const data=req.body
    const newTicket=await Ticket.create(data)
    if (newTicket){
        res.send(newTicket).status(200)
    }
    else{
        res.send("couldn't create try again").status(400)
    }
})

router.post("/ofUser/:id", async(req, res)=>{
    const {id}=req.params

    const ticket=await Ticket.find({creatorId: id})
    if(ticket){
        res.send(ticket).status(200)
    }
    else{
        res.send("couldn't find try again").status(400)
    }
})

router.post("/of/:id", async(req, res)=>{
    const {id}=req.params

    const ticket=await Ticket.findOne({_id: id})
    if(ticket){
        res.send(Ticket).status(200)
    }
    else{
        res.send("couldn't find try again").status(400)
    }
})

module.exports=router