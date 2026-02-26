const mongoose = require("mongoose");

const carEntrySchema = new mongoose.Schema(
  {
    vehicleNumber: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarEntry", carEntrySchema);