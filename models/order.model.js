const mongoose = require("mongoose");
const {Schema} = mongoose;

const OrderSchema = new Schema({

    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    employee: { type: Schema.Types.ObjectId, ref: "Employee" },
    statusOrder: { type: Schema.Types.ObjectId, ref: "StatusOrder" },
    service: { type: Schema.Types.ObjectId, ref: "Service" },
    Color: { type: Schema.Types.ObjectId, ref: "Color" },
    quantity: { type: Number, default:1 ,required:true },
    delivery:{type:Boolean, default:false},
    description: { type: String , lowercase:true },
    Subtotal:{type:Number},
    discount:{type:Number},
    total:{type:Number}
},
{timestamps:{createdAt:true,updatedAt:true}})


module.exports = mongoose.model("Order",OrderSchema)