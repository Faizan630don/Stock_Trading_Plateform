// models/HoldingsModel.js

const mongoose = require("mongoose");

const holdingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },  // CRITICAL: MUST be Number
  avg: { type: Number, required: true },  // CRITICAL: MUST be Number
  price: { type: Number, required: true }, // CRITICAL: MUST be Number
  net: String,
  day: String,
  isLoss: { type: Boolean, default: false }
});

const HoldingsModel = mongoose.model("Holding", holdingsSchema);

module.exports = { HoldingsModel };