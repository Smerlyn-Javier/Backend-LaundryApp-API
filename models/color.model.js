const mongoose = require("mongoose");
const { Schema } = mongoose;

const ColorSchema = new Schema(
  {
    color: { type: String, loadClass: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Color", ColorSchema);