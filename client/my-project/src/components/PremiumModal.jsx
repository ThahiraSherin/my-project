import React from "react";
import { useNavigate } from "react-router-dom";
import icici from "../assets/insurance/icici.svg";

const PremiumModal = ({ isOpen, onClose, plan }) => {
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
      <div className="relative bg-white w-full max-w-3xl rounded-lg shadow-2xl z-50">

        {/* Header */}
        <div className="relative px-6 py-4 border-b bg-gray-50 rounded-t-lg flex items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            Premium Breakup
          </h2>

          <button
            onClick={onClose}
            className="absolute right-6 text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6 text-sm text-gray-700">

          {/* INSURER + IDV + NCP */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-6">

            {/* Left: Insurer */}
            <div className="flex items-center gap-4">
              <img
                src={icici}
                alt={plan.insurer}
                className="h-15 w-auto object-contain"
              />
              <p className="font-medium text-gray-800">
                {plan.insurer}
              </p>
            </div>
             {/* Divider */}
  <div className="hidden md:block h-8 w-px bg-gray-200"></div>
            {/* Right: IDV & NCP */}
            <div className="flex gap-10">
              <div className="text-center">
                <p className="text-xs text-gray-500">IDV</p>
                <p className="font-semibold text-blue-600">
                  {plan.idv}
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">NCP</p>
                <p className="font-semibold text-blue-600">
                  45%
                </p>
              </div>
            </div>
          </div>

          {/* TWO COLUMN PREMIUM DETAILS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

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

          {/* TOTAL SECTION */}
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
              className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition shadow-md"
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