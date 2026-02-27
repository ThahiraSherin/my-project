import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import icilogo from "../assets/insurance/icilogo.svg";

const RegistrationDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const insuredData = location.state?.insured;

  const [form, setForm] = useState({
    address1: "",
    address2: "",
    landmark: "",
  });
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProposal = async () => {
    if (!form.address1 || !form.landmark) {
      alert("Please fill required fields");
      return;
    }

    try {
      const payload = {
        ...insuredData,
        ...form,
      };

      const res = await axios.post("/proposal", payload);

      if (res.data.success) {
        alert("Proposal Saved Successfully ✅");
        navigate("/");
      }
    } catch (err) {
      alert("Save Failed ❌");
    }
  };

  return (
    <>
      <Navbar />

      {/* MAIN BACKGROUND */}
      <div className="bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen">

        {/* SMALL TOP SPACER */}
        <div className="h-4 bg-linear-to-b from-[#9cacbb] to-[#9cacbb]"></div>

        <div className="py-6 px-4 max-w-7xl mx-auto">

          {/* SUMMARY BAR */}
          <div className="bg-white shadow rounded-md p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">

              <div className="flex flex-col items-center justify-center py-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
                <img src={icilogo} alt="ICICI" className="h-20 mb-2" />
                <p className="text-xs text-blue-600 cursor-pointer">Plan Features ▼</p>
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
              </div>

            </div>
          </div>

          {/* REGISTRATION FORM */}
          <div className="bg-white shadow rounded-md">

            <div className="bg-[#0C77B9] text-white px-6 py-3 font-semibold text-center rounded-t-md">
              Registration Details
            </div>

            <div className="p-8 rounded space-y-6">

              <div className="grid md:grid-cols-3 gap-6">

                <label className="flex flex-col">
                  <span>Address 1 <span className="text-red-500">*</span></span>
                  <input
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Address 1"
                    className={`w-full border-b-2 py-2 outline-none ${touched.address1 && !form.address1 ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  />
                </label>

                <input
                  name="address2"
                  value={form.address2}
                  onChange={handleChange}
                  placeholder="Address 2"
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                />

                <label className="flex flex-col">
                  <span>Landmark <span className="text-red-500">*</span></span>
                  <input
                    name="landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Landmark"
                    className={`w-full border-b-2 py-2 outline-none ${touched.landmark && !form.landmark ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  />
                </label>

              </div>

              <div className="text-center">
                <button
                  onClick={saveProposal}
                  className="bg-[#0C77B9] text-white px-8 py-2 rounded hover:bg-blue-700 transition"
                >
                  Save Proposal
                </button>
              </div>

            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default RegistrationDetails;