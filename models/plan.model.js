const mongoose = require("mongoose");
const { Schema } = mongoose;

const PlanSchema = new Schema(
  {
    plan: { type: String, required: true },
    discount: { type: Number },
    benefits: [{ type: String }],
    monthly_payment: { type: Number }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Plan", PlanSchema);
