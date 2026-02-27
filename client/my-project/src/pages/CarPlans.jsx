import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PremiumModal from "../components/PremiumModal";
import bg from "../assets/insurance/bg.svg";
import digit from "../assets/insurance/digit.svg";
import tata from "../assets/insurance/tata.svg";

const plans = [
  {
    id: 1,
    insurer: "Digit",
    logo: digit,
    idv: "₹ 2,52,900",
    price: "₹ 5,008",
  },
  {
    id: 2,
    insurer: "TATA AIG",
    logo: tata,
    idv: "₹ 2,52,900",
    price: "₹ 5,008",
  },
];

const dropdownData = {
  addons: [
    "Zero Depreciation",
    "Roadside Assistance",
    "Return to Invoice",
    "NCB Protector",
    "Engine Protector",
    "Consumable",
    "Key Replacement",
    "Tyre Cover",
    "Motor Protection",
    "Loss of Use",
    "Loss of Personal Belongings",
  ],
  accessories: [
    "Value of electronic accessories (invoice value)",
    "Value of non-electronic accessories (invoice value)",
  ],
  personalAccident: [
    "Cover for Paid Driver?",
    "Legal Liability to Paid Driver?",
    "Personal Accident cover for Co-Driver?",
  ],
  discounts: [
    "Voluntary Deductible?",
    "ARAI Anti-Theft Device Discount?",
    "Third-Party Property Damage",
  ],
  cng: ["Externally fitted CNG/LPG kit"],
};

const CarPlans = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div
        className="min-h-screen px-4 py-6"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
       {/* COMBINED VEHICLE SUMMARY + FILTER BAR */}
<div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md px-6 py-4 text-[#253456] mb-6">

  {/* VEHICLE SUMMARY */}
  <div className="text-sm flex flex-wrap gap-4 items-between">
    <span className="font-medium">
      Maruti Baleno (Petrol) Zeta Petrol (1197 CC)
    </span>
    <span className="text-[#0C77B9]">
      Edit
    </span>
    <span className="text-gray-500">
      Earned NCB : 45% 
    </span>
    <span className="text-[#0C77B9]">
      Edit
    </span>
    <span>|</span>
    <span className="text-gray-500">
      Previous Policy Expiry Date: 22/01/2026
    </span>
  </div>

  {/* HORIZONTAL DIVIDER */}
  <div className="border-t border-gray-200 my-4 text-[#253456]" />

  {/* FILTER BAR */}
  <div
    ref={dropdownRef}
    className="flex flex-wrap justify-between gap-10 relative text-[#737373]"
  >
    {[
      { label: "Add-ons", key: "addons" },
      { label: "Accessories Cover", key: "accessories" },
      { label: "Personal Accident Cover", key: "personalAccident" },
      { label: "Select Discounts", key: "discounts" },
      { label: "CNG Premium", key: "cng" },
    ].map((item) => (
      <div key={item.key} className="relative">
        <div
          onClick={() => toggleDropdown(item.key)}
          className="cursor-pointer"
        >
          <p className="font-medium text-gray-700">{item.label}</p>
          <span className="text-[#253456] text-sm">Select Cover  ▼</span>
        </div>

        {activeDropdown === item.key && (
          <div className="absolute top-10 left-0 w-72 bg-white border rounded-lg shadow-xl z-50 p-3 max-h-80 overflow-y-auto">
            {dropdownData[item.key].map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
              >
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" className="accent-blue-600" />
                  {option}
                </label>
                <span className="text-blue-500 text-xs border border-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
                  ?
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
      {/* RESULTS HEADER */}
{/* RESULTS HEADER */}
<div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center mb-4 px-4 py-6 text-md
                bg-[#F5F8FD] rounded-lg shadow-md border border-blue-100">
  <p className="text-[#0C77B9] font-semibold tracking-wide drop-shadow-sm">
    WE HAVE FOUND SIX RESULTS FOR YOU
  </p>

  <div className="flex items-center gap-3 mt-2 md:mt-0">
    <span className="text-gray-600">Sort Plans</span>

    <button
      className="border border-gray-300 px-3 py-1 rounded bg-[#F5F8FD] text-gray-700
                 shadow-sm hover:shadow-md hover:border-[#0C77B9] transition"
    >
      Recommended ▼
    </button>

    <button
      className="bg-green-500 text-white px-3 py-1 rounded
                 shadow-md hover:shadow-lg transition"
    >
      IDV
    </button>

    <button
      className="bg-[#0C77B9] text-white px-3 py-1 rounded
                 shadow-md hover:shadow-lg transition"
    >
      Share
    </button>
  </div>
</div>
        
        {/* PLAN CARDS */}
        <div className="max-w-7xl mx-auto space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-lg px-6 py-5 flex flex-wrap md:flex-nowrap gap-4"
            >
              {/* COLUMN 1 (Vehicle + Add-ons combined visually) */}
              <div className="md:w-1/4 bg-white rounded-lg shadow-md p-4 flex flex-col gap-1">
                <img
                  src={plan.logo}
                  alt={plan.insurer}
                  className="h-20 mx-auto"
                />

              </div>

              {/* COLUMN 2 */}
              <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 text-center">
                <p className="text-sm text-gray-500">IDV</p>
                <p className="font-semibold text-blue-600 text-lg">
                  {plan.idv}
                </p>
              </div>

              {/* COLUMN 3 */}
              <div className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-4 text-center">
                <p className="font-semibold text-lg text-gray-800">
                  Network Garages
                </p>
              </div>

              {/* COLUMN 4 */}
              <div className="w-full  md:w-1/4 bg-white rounded-lg shadow-md p-4 text-center flex flex-col">
                <button
                  onClick={() => openModal(plan)}
                  className="bg-blue-600 text-white px-2 py-2 rounded hover:bg-blue-700 text-lg"
                >
                  <p>{plan.price}</p>
                  
                </button>
                <span className="text-blue-600">Breakup</span>
              </div>
            </div>
          ))}
        </div>

        <PremiumModal
          isOpen={isModalOpen}
          onClose={closeModal}
          plan={selectedPlan || {}}
        />

        <Footer />
      </div>
    </>
  );
};

export default CarPlans;