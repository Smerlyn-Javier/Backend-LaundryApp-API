const mongoose = require("mongoose");
const {Schema} = mongoose;

const RoleSchema = new Schema({
    
    role:{type:String}

},{timestamps:{updatedAt:true, createdAt:true}})

module.exports = mongoose.model("Role",RoleSchema);