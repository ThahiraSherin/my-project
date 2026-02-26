const kycSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  documentType: {
    type: String,
    required: true,
  },
  addressProofType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Kyc = mongoose.model("Kyc", kycSchema);