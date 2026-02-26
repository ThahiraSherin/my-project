import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom";

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
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
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

      <div className="bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen py-6 px-4">

        {/* PAGE CONTAINER */}
        <div className="max-w-7xl mx-auto">

          {/* SUMMARY BAR */}
          <div className="bg-white shadow rounded-md p-4 mb-6">
            <div className="grid grid-cols-7 divide-x border rounded overflow-hidden text-center">

              <div className="py-4 bg-gray-50">
                <img src="/logos/digit.png" alt="digit" className="h-10 mx-auto mb-2" />
                <p className="text-xs text-blue-600">Plan Features ▼</p>
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
              Registration Details
            </div>

            <div className="p-8 space-y-6">

              <div className="grid md:grid-cols-3 gap-6">
                <label className="flex flex-col">
                  <span>Address 1 <span className="text-red-500">*</span></span>
                  <input
                    name="address1"
                    value={form.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Address 1"
                    className={`border-b-2 py-2 outline-none ${touched.address1 && !form.address1 ? 'border-red-500' : ''}`}
                  />
                </label>
                <input
                  name="address2"
                  value={form.address2}
                  onChange={handleChange}
                  placeholder="Address 2"
                  className="border-b-2 py-2 outline-none"
                />
                <label className="flex flex-col">
                  <span>Landmark <span className="text-red-500">*</span></span>
                  <input
                    name="landmark"
                    value={form.landmark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Landmark"
                    className={`border-b-2 py-2 outline-none ${touched.landmark && !form.landmark ? 'border-red-500' : ''}`}
                  />
                </label>
              </div>

              <div className="text-center">
                <button
                  onClick={saveProposal}
                  className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700"
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