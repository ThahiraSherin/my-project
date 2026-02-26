const mongoose = require("mongoose");
const { options } = require("../app");

const carInsuranceSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },
  rto: {
    type: String,
  },
  registrationDate: { 
    type: String,
  },
  make: {
    type: String,
 },
  model: {
    type: String,
  },
  policyExpiry: {
    type: String,
  },
  ownerType: {
    type: String,
  },
  fullName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("CarInsurance", carInsuranceSchema);