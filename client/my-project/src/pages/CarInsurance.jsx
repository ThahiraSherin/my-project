import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bg from "../assets/insurance/bg.svg";

const CarInsurance = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    policyExpiryDate: "",
    vehicleOwnerType: "",
    cpaCover: "",
    claimLastYear: "",
    ncb: "",
    fullName: "",
    mobile: "",
  });

  /* Fetch vehicle number */
  useEffect(() => {
    if (!entryId) {
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
      }
    };

    fetchVehicle();
  }, [entryId, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/car-insurance/renew", {
        ...form,
        entryId,
      });

      if (res.data.quoteId) {
        navigate("/car-insurance/plans", {
          state: { quoteId: res.data.quoteId },
        });
      }
    } catch {
      alert("Please fill the fields");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Background */}
      <div
        className="flex justify-center px-4 py-12"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Card */}
        <div className="w-full max-w-5xl bg-white border-2 border-blue-400 rounded-lg shadow-lg px-8 py-6">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-5">
            Renew Car Details
          </h2>

          {/* Policy Type */}
          <div className="flex justify-center gap-2 mb-6">
            {["Standalone OD", "Comprehensive", "Third-Party"].map((item, i) => (
              <button
                key={item}
                className={`px-4 py-1.5 text-sm rounded border ${
                  i === 1
                    ? "bg-[#0C77B9] text-white"
                    : "border-[#0C77B9] text-[#0C77B9]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="grid md:grid-cols-3 gap-4 text-grey-100 text-sm">
            <Input label="Vehicle Number" value={form.vehicleNumber} disabled />
            <Input label="RTO" name="rto" placeholder="KA60 (BENGALURU)" onChange={handleChange} />
            <Input type="date" label="Registration Date" name="registrationDate" onChange={handleChange} />

            <Select label="Make" name="make" placeholder="Maruti" onChange={handleChange} />
            <Select label="Model" name="model" placeholder="Select Variant" onChange={handleChange} />
            <Select label="Variant" name="variant" placeholder="Select Variant" onChange={handleChange} />

            <Select label="Previous Policy" name="previousPolicy" onChange={handleChange} />
            <Select label="Existing User" name="existingUser" onChange={handleChange} />
            <Input type="date" label="Policy Expiry Date" name="policyExpiryDate" onChange={handleChange} />

            <ToggleGroup
              label="Vehicle Owner Type"
              name="vehicleOwnerType"
              options={["Individual", "Organization"]}
              onChange={handleChange}
            />

            <ToggleGroup
              label="Separate CPA Cover?"
              name="cpaCover"
              options={["Yes", "No"]}
              onChange={handleChange}
            />

            <ToggleGroup
              label="Claim in Expiring Policy?"
              name="claimLastYear"
              options={["Yes", "No"]}
              onChange={handleChange}
            />

            <Select label="NCB Earned" name="ncb" onChange={handleChange} />
          </div>

          {/* Personal Details */}
          <h3 className="text-md font-semibold text-center mt-8 mb-3">
            Renew Car Details
          </h3>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Input label="Full Name" name="fullName" onChange={handleChange} />
            <Input label="Mobile Number" name="mobile" onChange={handleChange} />
          </div>

          {/* Terms */}
          <div className="flex justify-center items-center gap-2 mt-6 text-xs">
            <input type="checkbox" />
            <span>
              I agree to the{" "}
              <span className="text-[#0C77B9] underline">terms & conditions</span>
            </span>
          </div>

          {/* Actions */}
          <div className="relative mt-8 flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="text-[#0C77B9] text-sm"
            >
              ← Back
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="absolute left-1/2 -translate-x-1/2 bg-[#0C77B9] hover:bg-[#0A6295] text-white px-10 py-2.5 rounded-md font-medium"
            >
              {loading ? "Processing..." : "Get Quote"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

/* ---------------- Reusable Components ---------------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 text-gray-700">{label}</label>
    <input
      {...props}
      className="w-full border border-blue-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  </div>
);

const Select = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 text-gray-700">{label}</label>
    <select
      {...props}
      className="w-full border border-blue-400 px-3 py-2 rounded bg-white focus:outline-none"
    >
      <option value="">Select</option>
    </select>
  </div>
);

const ToggleGroup = ({ label, name, options, onChange }) => (
  <div>
    <p className="mb-1">{label}</p>
    <div className="flex border border-blue-400 rounded overflow-hidden w-fit">
      {options.map((opt) => (
        <label
          key={opt}
          className="px-5 py-1.5 cursor-pointer text-sm text-blue-600 border-r last:border-r-0"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            onChange={onChange}
            className="hidden"
          />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

export default CarInsurance;