const mongoose = require("mongoose");
const {Schema} = mongoose;


const IncludedServicesSchema = new Schema({

included_services:{type:String},
time:{type:String}

},{timestamps:{createdAt:true,updatedAt:true}})

module.exports = mongoose.model("includedServices",IncludedServicesSchema);