const mongoose = require("mongoose")
const {Schema} = mongoose;
const {StatusHelper} = require("../helpers");

const WashPiceSchema = new Schema({

 picture:{type:String},
 washPice:{type:String,required:true},
 price:{type:String,required:true},
 status:{type:String , default:StatusHelper.ACTIVE},
 category:{type:Schema.Types.ObjectId, ref:"CategoryPice"}

},
{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("WashPice",WashPiceSchema);