import React from "react";
import Customer from "../components/svg/customer";
import rightside from "../assets/millions/rightside.svg";

const Millions = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="bg-white flex flex-col md:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 ">

          {/* TITLE */}
          <h1 className="text-3xl ml-35 font-bold text-[#253456] mb-10">
            Why Millions Trust Us
          </h1>

          {/* CUSTOMER COMPONENT */}
          <div className="flex justify-end mt-6 ml-8">
            <Customer />
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center h-100 w-100">
          <img
            src={rightside}
            alt="Why Millions Trust Us"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Millions;