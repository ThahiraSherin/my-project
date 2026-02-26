const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  // Insured Details
  salutation: { type: String },
  fullName: { type: String },
  dob: { type: String },
  gender: { type: String },
  mobile: { type: String },
  email: { type: String },
  panNumber: { type: String },
  maritalStatus: { type: String },

  // Registration Details
  address1: { type: String },
  address2: { type: String },
  landmark: { type: String },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Proposal", proposalSchema);