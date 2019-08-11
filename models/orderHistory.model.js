const mongoose = require("mongoose");
const {Schema} = mongoose;


const OrderHistorySchema = new Schema({
    order:{type: Schema.Types.ObjectId, ref: "Order" },
    customer: { type: String},
    employee: { type: String },
    statusOrder: { type: String},
    currentService:{ type:String},
    
},
{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("OrderHistory",OrderHistorySchema);