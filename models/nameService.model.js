const mongoose = require("mongoose");
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers")

const NameServiceSchema = new Schema({
service:{type:String, required:true},
included_services:[{type:Schema.Types.ObjectId,ref:"includedServices"}],
price:{type:String, required:true},
time:{type:time},
status:{type:String, default:StatusHelper.ACTIVE}

},{timestamps:{createdAt:true,updatedAt:true}})

module.exports = mongoose.model("NameService",NameServiceSchema);