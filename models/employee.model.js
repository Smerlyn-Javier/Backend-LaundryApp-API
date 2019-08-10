const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers");


const EmployeeSchema = new Schema({
    name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, lowercase: true, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    birthday: { type: Date },
    picture: { type: String },
    roles: [{ type: Schema.Types.ObjectId, ref: "Role" }],
    status: { type: String, default: StatusHelper.ACTIVE }

},{timestamps:{updatedAt:true, createdAt:true}})


module.exports = mongoose.model("Employee", EmployeeSchema);