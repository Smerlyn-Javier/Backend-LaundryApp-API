const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers");


const EmployeeSchema = new Schema({

    name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, lowercase: true },
    username: { type: String,  unique: true },
    password: { type: String },
    address: { type: String },
    birthday: { type: Date },
    picture: { type: String },
    role: { type:Schema.Types.ObjectId, ref: "Role" },
    status: { type: String, default: StatusHelper.ACTIVE }

},{timestamps:{updatedAt:true, createdAt:true}})


module.exports = mongoose.model("Employee", EmployeeSchema);