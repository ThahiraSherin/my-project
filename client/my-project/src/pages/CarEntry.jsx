import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import car from "../assets/insurance/car.svg";
import bg from "../assets/insurance/bg.svg";

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
      }
    } catch {
      alert("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Page Wrapper */}
      <div className="relative h-screen overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="absolute inset-0 bg-white/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-4xl border-2 border-blue-400 bg-white rounded-md shadow-md p-6 relative">

            {/* Car Tab */}
            <div className="absolute -top-12 left-0">
              <img src={car} alt="car" className="w-28" />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Please Provide Your Vehicle Details
            </h2>

            <div className="max-w-md mx-auto text-center">
              <p className="mb-3 font-medium">
                Please Enter Vehicle Registration Number
              </p>

              <input
                value={vehicleNo}
                onChange={(e) => setVehicleNo(e.target.value.toUpperCase())}
                placeholder="Eg: MH04AB1234"
                className="w-full border border-blue-500 px-4 py-3 rounded focus:ring-2 focus:ring-blue-400"
              />

              <div className="flex justify-between text-sm text-blue-600 mt-2">
                <button className="hover:underline">Don’t Know Car Number?</button>
                <button className="hover:underline">Used Car?</button>
                <button className="hover:underline">Brand New Car?</button>
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-6 bg-[#0b72b9] text-white px-16 py-2 rounded-md disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CarEntry;