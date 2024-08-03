const mongoose =require("mongoose");

const TicketSchema=new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    name: String,
    department: String,
    subject: String,
    category: String,
    type: String,
    priority: String,
    description: String,
    creatorId: String,
    status: {
        type: String,
        default: "In Progress"
    },
})

const Ticket=mongoose.model("Ticket", TicketSchema)
module.exports = Ticket