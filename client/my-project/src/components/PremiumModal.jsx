import React from "react";
import { useNavigate } from "react-router-dom";

const PremiumModal =  ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-3xl rounded-md shadow-2xl z-50">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50 rounded-t-md">
          <h2 className="text-lg font-semibold text-gray-800">
            Premium Breakup
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-lg"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 text-sm text-gray-700">

          {/* Insurer + IDV + NCP */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <img
                src={plan.logo}
                alt={plan.insurer}
                className="h-10 object-contain"
              />
              <div>
                <p className="font-medium">{plan.insurer}</p>
                <p className="text-xs text-gray-500">
                  company limited
                </p>
              </div>
            </div>

            <div className="flex gap-10 text-right">
              <div>
                <p className="text-xs text-gray-500">IDV</p>
                <p className="font-semibold text-blue-600">
                  {plan.idv}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-500">NCP</p>
                <p className="font-semibold text-blue-600">
                  45%
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Premium Section */}
          <div className="grid grid-cols-2 gap-10">

            {/* LEFT COLUMN */}
            <div>
              <p className="text-blue-600 font-semibold mb-2">
                OWN DAMAGE PREMIUM (A)
              </p>

              <div className="flex justify-between mb-1">
                <span>Basic Own Damage Premium</span>
                <span>₹ 8088</span>
              </div>

              <p className="text-blue-600 font-semibold mt-4 mb-2">
                DISCOUNTS
              </p>

              <div className="flex justify-between mb-1">
                <span>NCB Discount</span>
                <span>₹ 3640</span>
              </div>

              <div className="flex justify-between mb-1">
                <span>Own Damage Discount</span>
                <span>N/A</span>
              </div>

              <p className="text-blue-600 font-semibold mt-4 mb-2">
                ADD ONS
              </p>

              <div className="flex justify-between mb-1">
                <span>Nil</span>
                <span></span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <p className="text-blue-600 font-semibold mb-2">
                THIRD PARTY PREMIUM (B)
              </p>

              <div className="flex justify-between mb-1">
                <span>Basic TP Premium</span>
                <span>₹ 3416</span>
              </div>

              <div className="flex justify-between mb-1">
                <span>Owner Driver Personal Accident</span>
                <span>₹ 350</span>
              </div>

              <p className="text-blue-600 font-semibold mt-4 mb-2">
                PERSONAL ACCIDENT COVERAGE
              </p>

              <div className="flex justify-between mb-1">
                <span>Nil</span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Bottom Calculation Section */}
          <div className="border-t mt-6 pt-4">

            <div className="flex justify-between mb-2">
              <span className="font-medium">
                NET PREMIUM (A+B)
              </span>
              <span>₹ 8214</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>GST (18%)</span>
              <span>₹ 1479</span>
            </div>

            <div className="flex justify-between font-semibold text-base mt-4">
              <span>TOTAL PAYABLE PREMIUM</span>
              <span className="text-blue-600">
                {plan.price}
              </span>
            </div>
          </div>

          {/* BUY BUTTON */}
          <div className="text-center mt-6">
            <button
            onClick={() => navigate("/kyc")}
            className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition"
            >
            BUY
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PremiumModal;