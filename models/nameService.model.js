const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers")

const NameServiceSchema = new Schema({
service:{type:String, required:true},
included_services:[{type:String}],
price:{type:String, required:true},
status:{type:String, default:StatusHelper.ACTIVE}

},{timestamps:{createdAt:true,updatedAt:true}})

module.exports = mongoose.model("NameService",NameServiceSchema);