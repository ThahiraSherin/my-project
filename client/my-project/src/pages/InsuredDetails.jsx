import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import icilogo from "../assets/insurance/icilogo.svg";

const InsuredDetails = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    salutation: "",
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    panNumber: "",
    maritalStatus: "",
  });

  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const goToRegistration = () => {
    if (!form.fullName || !form.mobile || !form.email) {
      alert("Please fill required fields");
      return;
    }
    navigate("/registration-details", {
      state: { insured: form },
    });
  };

  return (
    <>
      <Navbar />

      {/* MAIN BACKGROUND */}
      <div className="bg-gradient-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen">

        {/* ADD SMALL TOP SPACER WITH SAME BG */}
        <div className="h-4 bg-gradient-to-b from-[#9cacbb] to-[#9cacbb]"></div>

        <div className="py-6 px-4 max-w-7xl mx-auto">

          {/* SUMMARY BAR */}
          <div className="bg-white shadow rounded-md p-4 mb-6">
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
              </div>

            </div>
          </div>

          {/* INSURED DETAILS FORM */}
          <div className="bg-white shadow rounded-md">

            <div className="bg-[#0C77B9] text-white px-6 py-3 font-semibold text-center rounded-t-md">
              Insured Details
            </div>

            <div className="p-8  m-6 rounded space-y-6">

              <div className="grid md:grid-cols-3 gap-6">
                <select
                  name="salutation"
                  value={form.salutation}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                >
                  <option value="">Select Salutation</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>

                <label className="flex flex-col">
                  <span>Full Name <span className="text-red-500">*</span></span>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Full Name"
                    className={`w-full border-b-2 py-2 outline-none ${touched.fullName && !form.fullName ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  />
                </label>
                {touched.fullName && !form.fullName && (
                  <p className="text-red-500 text-xs">Full name required</p>
                )}

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label className="flex flex-col">
                  <span>Mobile Number <span className="text-red-500">*</span></span>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Mobile Number"
                    className={`w-full border-b-2 py-2 outline-none ${touched.mobile && !form.mobile ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  />
                </label>
                {touched.mobile && !form.mobile && (
                  <p className="text-red-500 text-xs">Mobile required</p>
                )}

                <label className="flex flex-col">
                  <span>Email ID <span className="text-red-500">*</span></span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email ID"
                    className={`w-full border-b-2 py-2 outline-none ${touched.email && !form.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  />
                </label>
                {touched.email && !form.email && (
                  <p className="text-red-500 text-xs">Email required</p>
                )}

              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <input
                  name="panNumber"
                  value={form.panNumber}
                  onChange={handleChange}
                  placeholder="PAN Number"
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                />

                <select
                  name="maritalStatus"
                  value={form.maritalStatus}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2 outline-none focus:border-blue-600"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  onClick={goToRegistration}
                  className="bg-[#0C77B9] text-white px-8 py-2 rounded hover:bg-blue-700 transition"
                >
                  Next
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

export default InsuredDetails;