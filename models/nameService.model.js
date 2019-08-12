const mongoose = require("mongoose");
const { Schema } = mongoose;
const { StatusHelper } = require("../helpers");

const NameServiceSchema = new Schema(
  {
    service: { type: String, required: true },
    included_services: [
      { type: Schema.Types.ObjectId, ref: "includedServices" }
    ],
    price: { type: Number, required: true },
    time: { type: Number, default: 0 },
    time2: { type: Number, default: 0 },
    status: { type: String, default: StatusHelper.ACTIVE }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("NameService", NameServiceSchema);
