const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers")

const CustomerModel = new Schema({ name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, lowercase: true, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },picture: { type: String },
    status:{type:String , default:StatusHelper.ACTIVE}
    },
    {timestamps:{createdAt:true,updatedAt:true}})


module.exports = mongoose.model("Customer",CustomerModel);
