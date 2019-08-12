const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceSchema = new Schema(
  {
    nameService: { type: Schema.Types.ObjectId, ref: "NameService" },
    washPice: { type: Schema.Types.ObjectId, ref: "WashPice" }, //una combinacion de nameservice y whaspice ejemplo lavado/camiza
    price: { type: Number }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Service", ServiceSchema);
