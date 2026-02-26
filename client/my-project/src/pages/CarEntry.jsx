import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

const CarEntry = () => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!vehicleNo) {
      alert("Enter vehicle number");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("/car-entry", {
        vehicleNumber: vehicleNo,
      });

      if (res.data.success) {
        navigate("/car-insurance/details", {
          state: { entryId: res.data.entryId },
        });
      } else {
        alert(res.data.message || "Submission failed");
      }
    } catch (error) {
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] flex justify-center pt-20">
        <div className="bg-white p-10 rounded shadow w-full max-w-3xl">
          <h2 className="text-xl font-semibold text-center mb-6">
            Please Provide Your Vehicle Details
          </h2>

          <input
            value={vehicleNo}
            onChange={(e) => setVehicleNo(e.target.value)}
            placeholder="Eg: MH04AB1234"
            className="w-full border border-blue-500 px-4 py-2 rounded"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="block mx-auto mt-8 bg-[#0b72b9] hover:bg-[#094f85] text-white px-10 py-2 rounded disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CarEntry;