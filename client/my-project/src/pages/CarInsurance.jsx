import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

const CarInsurance = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // entryId passed from CarEntry page
  const entryId = location.state?.entryId;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    vehicleNumber: "",
    rto: "",
    registrationDate: "",
    make: "",
    model: "",
    variant: "",
    previousPolicy: "",
    existingUser: "",
    policyExpiry: "",
    ownershipChange: "",
    claimLastYear: "",
    ncb: "",
    fullName: "",
    mobile: "",
  });
  const [touched, setTouched] = useState({});

  const requiredFields = [
    "rto",
    "registrationDate",
    "policyExpiry",
    "ownershipChange",
    "claimLastYear",
    "fullName",
    "mobile",
  ];

  /* ---------------------------------
     FETCH VEHICLE NUMBER
  ----------------------------------*/
  useEffect(() => {
    if (!entryId) {
      alert("Invalid entry. Please start again.");
      navigate("/");
      return;
    }

    const fetchVehicle = async () => {
      try {
        const res = await axios.get(`/car-entry/${entryId}`);
        setForm((prev) => ({
          ...prev,
          vehicleNumber: res.data.vehicleNumber,
        }));
      } catch (err) {
        console.error(err);
        alert("Unable to fetch vehicle details");
      }
    };

    fetchVehicle();
  }, [entryId, navigate]);

  /* ---------------------------------
     HANDLE INPUT CHANGE
  ----------------------------------*/
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  /* ---------------------------------
     SUBMIT → SAVE → NAVIGATE
  ----------------------------------*/
  const handleSubmit = async () => {
    // mark all required fields as touched so validation highlights show
    const newTouched = {};
    requiredFields.forEach((f) => (newTouched[f] = true));
    setTouched(newTouched);

    try {
      setLoading(true);

      const res = await axios.post("/car-insurance/renew", {
        ...form,
        entryId,
      });

      console.log("QUOTE RESPONSE 👉", res.data);

      // ✅ Navigate only when quoteId exists
      if (res.status === 200 && res.data.quoteId) {
        navigate("/car-insurance/plans", {
          state: { quoteId: res.data.quoteId },
        });
      } else {
        alert("Quote ID not received");
      }
    } catch (err) {
      console.error(err);
      alert("Please fill all required fields correctly");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">

          {/* TITLE */}
          <h2 className="text-lg font-semibold text-center mb-6">
            Renew Car Insurance
          </h2>

          {/* INSURANCE TYPE */}
          <div className="flex gap-2 mb-6 justify-center">
            {["Standalone OD", "Comprehensive", "Third Party"].map((item) => (
              <button
                key={item}
                className="border px-4 py-2 rounded text-sm hover:bg-blue-50"
              >
                {item}
              </button>
            ))}
          </div>

          {/* FORM */}
          <div className="font-bold grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input label="Vehicle Number" name="vehicleNumber" value={form.vehicleNumber} disabled />
            <Input label="RTO" name="rto" onChange={handleChange} onBlur={handleBlur} required error={requiredFields.includes("rto") && touched.rto && !form.rto} />
            <Input label="Registration Date" type="date" name="registrationDate" onChange={handleChange} onBlur={handleBlur} required error={requiredFields.includes("registrationDate") && touched.registrationDate && !form.registrationDate} />

            <Select label="Make" name="make" onChange={handleChange} onBlur={handleBlur} />
            <Select label="Model" name="model" onChange={handleChange} onBlur={handleBlur} />
            <Select label="Variant" name="variant" onChange={handleChange} onBlur={handleBlur} />

            <Select label="Previous Policy" name="previousPolicy" onChange={handleChange} onBlur={handleBlur} />
            <Select label="Existing User" name="existingUser" onChange={handleChange} onBlur={handleBlur} />
            <Input label="Policy Expiry Date" type="date" name="policyExpiry" onChange={handleChange} onBlur={handleBlur} required error={requiredFields.includes("policyExpiry") && touched.policyExpiry && !form.policyExpiry} />
          </div>

          {/* RADIO GROUPS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <RadioGroup
              label="Ownership changed in last 12 months?"
              name="ownershipChange"
              onChange={handleChange}
            />
            <RadioGroup
              label="Any claim in last policy?"
              name="claimLastYear"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4 max-w-xs">
            <Select label="NCB Earned" name="ncb" onChange={handleChange} />
          </div>

          {/* PERSONAL DETAILS */}
          <h3 className="text-md font-semibold text-center mt-8 mb-4">
            Personal Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Full Name" name="fullName" onChange={handleChange} onBlur={handleBlur} required error={requiredFields.includes("fullName") && touched.fullName && !form.fullName} />
            <Input label="Mobile Number" name="mobile" onChange={handleChange} onBlur={handleBlur} required error={requiredFields.includes("mobile") && touched.mobile && !form.mobile} />
          </div>

          {/* TERMS */}
          <div className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" />
            <span>I agree to the terms & conditions</span>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#0b72b9] text-white px-8 py-2 rounded hover:bg-[#095a91] disabled:opacity-60"
            >
              {loading ? "Processing..." : "Get Quote"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------- REUSABLE COMPONENTS ---------- */

const Input = ({ label, required, error, ...props }) => (
  <div>
    <label className="text-xs text-gray-600">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      {...props}
      className={`w-full border rounded px-3 py-2 text-sm disabled:bg-gray-100 ${error ? 'border-red-500' : 'border-blue-300'}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">This field is required</p>}
  </div>
);

const Select = ({ label, required, error, ...props }) => (
  <div>
    <label className="text-xs text-gray-600">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <select
      {...props}
      className={`w-full rounded px-3 py-2 text-sm ${error ? 'border-red-500' : 'border border-blue-300'}`}
    >
      <option value="">Select</option>
    </select>
    {error && <p className="text-red-500 text-xs mt-1">This field is required</p>}
  </div>
);

const RadioGroup = ({ label, name, onChange, required, error }) => (
  <div>
    <p className="text-sm mb-2">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </p>
    <div className="flex gap-6">
      {["Yes", "No"].map((v) => (
        <label key={v} className="flex items-center gap-2 text-sm">
          <input type="radio" name={name} value={v} onChange={onChange} />
          {v}
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">This field is required</p>}
  </div>
);

export default CarInsurance;