const mongoose = require("mongoose");
const {Schema} = mongoose;

const CategoryPiceSchema = new Schema({

    category:{type:String}
},
{timestamps:{createdAt:true,updatedAt:true}});

module.exports = mongoose.model("CategoryPice",CategoryPiceSchema);