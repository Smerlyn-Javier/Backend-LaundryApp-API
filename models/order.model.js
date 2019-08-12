const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    employee: { type: Schema.Types.ObjectId, ref: "Employee" },
    statusOrder: { type: Schema.Types.ObjectId, ref: "StatusOrder" },
    service: { type: Schema.Types.ObjectId, ref: "Service" },
    currentService: { type: String },
    aditionalService: [{ type: Schema.Types.ObjectId, ref: "NameService" }],
    color: { type: Schema.Types.ObjectId, ref: "Color" },
    quantity: { type: Number, default: 1, required: true },
    delivery: { type: Boolean, default: false },
    description: { type: String, lowercase: true },
    Subtotal: { type: Number },
    discount: { type: Number },
    total: { type: Number }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

OrderSchema.pre("save", async function(next) {
  const order = this;
  const defaultStatus = await StatusOrder.findOne({ status: "pending" });
  order.idStatusOrder = defaultStatus;
  next();
});

module.exports = mongoose.model("Order", OrderSchema);
