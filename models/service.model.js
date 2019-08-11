const mongoose = require("mongoose");
const {Schema} = mongoose;

const ServiceSchema = new Schema({

    nameService:{type:Schema.Types.ObjectId,ref:"NameService"},
    washPice:{type:Schema.Types.ObjectId,ref:"WashPice"},
    service:{type:String},//una combinacion de nameservice y whaspice ejemplo lavado/camiza
    price:{type:String}

},
{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("Service",ServiceSchema);