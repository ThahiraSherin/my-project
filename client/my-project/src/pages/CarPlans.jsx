import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PremiumModal from "../components/PremiumModal";

const plans = [
  {
    id: 1,
    insurer: "Digit",
    logo: "/logos/digit.png",
    idv: "₹ 2,52,900",
    price: "₹ 5,008",
  },
  {
    id: 2,
    insurer: "TATA AIG",
    logo: "/logos/tata-aig.png",
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

  const closeModal = () => {
  setIsModalOpen(false);
};

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
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

      <div className="bg-linear-to-b from-[#9cacbb] to-[#c7e0fa] min-h-screen px-4 py-6">

        {/* VEHICLE SUMMARY */}
        <div className="max-w-7xl mx-auto bg-white rounded shadow px-6 py-3 mb-4 text-sm flex flex-wrap gap-4 items-center">
          <span className="font-medium">
            Maruti Baleno (Petrol) Zeta Petrol (1197 CC)
          </span>
          <span className="text-gray-500">
            RTO: KA-05 (Bengaluru)
          </span>
          <span className="text-gray-500">
            Previous Policy Expiry Date: 22/01/2026
          </span>
        </div>

        {/* FILTER BAR */}
        <div
          className="max-w-7xl mx-auto bg-white rounded shadow px-6 py-3 mb-6 flex flex-wrap justify-between gap-10 text-md relative"
          ref={dropdownRef}
        >
          {/* Reusable Dropdown */}
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
                className="cursor-pointer text-gray-700"
              >
                <p className="font-medium">{item.label}</p>
                <span className="text-blue-600">
                  Select ▼
                </span>
              </div>

              {activeDropdown === item.key && (
                <div className="absolute top-10 left-0 w-72 bg-white border rounded shadow-lg z-50 p-3 max-h-80 overflow-y-auto">
                  {dropdownData[item.key].map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
                    >
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          className="accent-blue-600"
                        />
                        {option}
                      </label>

                      <span className="text-blue-500 text-xs border border-blue-500 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer">
                        ?
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RESULTS HEADER */}
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-3 text-sm">
          <p className="text-blue-700 font-medium">
            WE HAVE FOUND SIX RESULTS FOR YOU
          </p>

          <div className="flex items-center gap-3">
            <span className="text-gray-600">Sort Plans</span>
            <button className="border px-3 py-1 rounded bg-white">
              Recommended ▼
            </button>
            <button className="bg-green-500 text-white  px-3 py-1 rounded">
              IDV
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">
              Share
            </button>
          </div>
        </div>

        {/* PLAN CARDS */}
        {/* PLAN CARDS */}
        <div className="max-w-7xl mx-auto space-y-4">
        {plans.map((plan) => (
            <div
            key={plan.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 px-6 py-5 flex flex-wrap md:flex-nowrap items-center"
            >
            {/* Column 1 */}
            <div className="flex flex-col items-center gap-3 w-full md:w-1/4 md:border-r border-gray-200">
                <img
                src={plan.logo}
                alt={plan.insurer}
                className="h-10 object-contain"
                />
                <div className="text-sm text-blue-600 cursor-pointer font-medium">
                Plan Features ▼
                </div>
            </div>

            {/* Column 2 */}
            <div className="text-center w-full md:w-1/4 py-4 md:py-0 md:border-r border-gray-200">
                <p className="text-md text-gray-500 uppercase tracking-wide">
                IDV
                </p>
                <p className="font-semibold text-blue-500 text-lg">
                {plan.idv}
                </p>
            </div>

            {/* Column 3 */}
            <div className="text-center w-full md:w-1/4 py-4 md:py-0 md:border-r border-gray-200">
                <p className="font-medium text-gray-800">
                Network Garages
                </p>
                <p className="text-xs text-gray-500 mt-1">
                No Add-ons Selected
                </p>
            </div>

            {/* Column 4 */}
            <div className="text-center w-full md:w-1/4 py-4 md:py-0">
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition" onClick={() => openModal(plan)}>
                    <p>{plan.price}</p>
                    Breakup
                </button>
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