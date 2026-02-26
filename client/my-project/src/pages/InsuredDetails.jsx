import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const requiredFields = ["fullName", "mobile", "email"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
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

      <div className="bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen py-6 px-4">

        {/* PAGE CONTAINER */}
        <div className="max-w-7xl mx-auto">

          {/* SUMMARY BAR */}
          <div className="bg-white shadow rounded-md p-4 mb-6">
            <div className="grid grid-cols-7 divide-x border rounded overflow-hidden text-center">

              <div className="py-4 bg-gray-50">
                <img src="/logos/digit.png" alt="digit" className="h-10 mx-auto mb-2" />
                <p className="text-xs text-blue-600 cursor-pointer">Plan Features ▼</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">Make</p>
                <p className="text-blue-600 font-medium">Maruti</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">Model</p>
                <p className="text-blue-600 font-medium">Baleno (Petrol)</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">Variant</p>
                <p className="text-blue-600 font-medium">Zeta Petrol</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">IDV</p>
                <p className="text-blue-600 font-semibold">₹ 2,93,300</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">NCB</p>
                <p className="text-blue-600 font-semibold">50%</p>
              </div>

              <div className="py-4 bg-gray-50">
                <p className="text-xs text-gray-500">Premium</p>
                <p className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold inline-block">
                  ₹ 9216
                </p>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white shadow rounded-md">
            <div className="bg-blue-700 text-white px-6 py-3 font-semibold text-center">
              Insured Details
            </div>

            <div className="p-8 space-y-6">

              <div className="grid md:grid-cols-3 gap-6">

                <select
                  name="salutation"
                  value={form.salutation}
                  onChange={handleChange}
                  className="border-b-2 py-2 outline-none"
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
                    className={`border-b-2 py-2 outline-none ${touched.fullName && !form.fullName ? 'border-red-500' : ''}`}
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
                  className="border-b-2 py-2 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="border-b-2 py-2 outline-none"
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
                    className={`border-b-2 py-2 outline-none ${touched.mobile && !form.mobile ? 'border-red-500' : ''}`}
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
                    className={`border-b-2 py-2 outline-none ${touched.email && !form.email ? 'border-red-500' : ''}`}
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
                  className="border-b-2 py-2 outline-none"
                />

                <select
                  name="maritalStatus"
                  value={form.maritalStatus}
                  onChange={handleChange}
                  className="border-b-2 py-2 outline-none"
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  onClick={goToRegistration}
                  className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700"
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