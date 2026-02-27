import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import icilogo from "../assets/insurance/icilogo.svg";

const KycPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    documentType: "PAN",
    addressProofType: "PAN",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async () => {
    if (!formData.mobileNumber || !formData.email) {
      setTouched({ mobileNumber: true, email: true });
      alert("Please fill required fields");
      return;
    }

    try {
      const res = await axios.post("/kyc", formData);
      if (res.data.success) {
        navigate("/insured-details");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen py-6 px-4">

        {/* TOP SUMMARY BAR */}
        <div className="max-w-7xl mx-auto bg-white shadow rounded-md p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <img src={icilogo} alt="ICICI" className="h-20 mb-2" />
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">Make</p>
              <p className="text-blue-600 font-medium">Maruti</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">Model</p>
              <p className="text-blue-600 font-medium">Baleno (Petrol)</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">Variant</p>
              <p className="text-blue-600 font-medium">Zeta Petrol</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">IDV</p>
              <p className="text-blue-600 font-semibold">₹ 2,93,300</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">NCB</p>
              <p className="text-blue-600 font-semibold">50%</p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <p className="text-xs text-gray-500">Premium</p>
              <p className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                ₹ 9216
              </p>
              <p className="text-xs text-blue-600 mt-1 cursor-pointer hover:underline">
                Premium Breakup
              </p>
            </div>

          </div>
        </div>

        {/* KYC SECTION */}
        <div className="max-w-7xl mx-auto bg-white shadow rounded-md">

          <div className="bg-[#0C77B9] text-white px-6 py-3 font-semibold text-center rounded-t-md">
            KYC Details
          </div>

          <div className="p-8 border-2 border-blue-300 border-dashed m-6 rounded">

            {/* EKYC */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-2">
                Have you registered with e-KYC?
              </p>
              <div className="flex gap-6 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="ekyc" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ekyc" defaultChecked /> No
                </label>
              </div>
            </div>

            {/* ROW 1 */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border-b-2 py-2 outline-none ${
                    touched.mobileNumber && !formData.mobileNumber
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-600"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border-b-2 py-2 outline-none ${
                    touched.email && !formData.email
                      ? "border-red-500"
                      : "border-gray-300 focus:border-blue-600"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Select document to get verified
                </label>
                <select className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600">
                  <option>PAN</option>
                </select>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">
                  Select document to verify address
                </label>
                <select className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600">
                  <option>PAN</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Upload PAN Document
                </label>
                <input type="file" className="w-full mt-2" />
              </div>
            </div>

            {/* SUBMIT */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-[#0C77B9] text-white px-8 py-2 rounded hover:bg-blue-700 transition"
              >
                Verify KYC Details
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default KycPage;