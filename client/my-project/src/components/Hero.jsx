import { useNavigate } from "react-router-dom";

/* --------- IMPORT SVGs --------- */
import termlife from "../assets/hero/termlife.svg";
import investment from "../assets/hero/investment.svg";

import car from "../assets/hero/car.svg";
import bike from "../assets/hero/bike.svg";
import legalaid from "../assets/hero/legalaid.svg";

import mediclaim from "../assets/hero/mediclaim.svg";
import supertopup from "../assets/hero/supertopup.svg";

import travel from "../assets/hero/travel.svg";
import sme from "../assets/hero/sme.svg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-3xl font-bold text-[#0C77B9] uppercase mb-3">
            Secure Your Future With Smart Insurance
          </h1>

          <p className="text-gray-500 mb-10 max-w-xl">
            Compare, choose, and buy the best insurance plans in minutes.
            Trusted by thousands of customers across India.
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-6 gap-5 max-w-xl">

        {/* ROW 1 */}
        <div className="col-span-3">
          <InsuranceCard
            title="Life"
            items={[
              { label: "Term Life", img: termlife },
              { label: "Investment", img: investment },
            ]}
          />
        </div>

        <div className="col-span-3">
          <InsuranceCard
            title="Motor"
            items={[
              {
                label: "Car",
                img: car,
                onClick: () => navigate("/car-insurance"),
              },
              { label: "Bike", img: bike },
              { label: "Legal Aid", img: legalaid },
            ]}
          />
        </div>

        {/* ROW 2 */}
        <div className="col-span-3">
          <InsuranceCard
            title="Health"
            items={[
              { label: "Mediclaim", img: mediclaim },
              { label: "Super Top Up", img: supertopup },
            ]}
          />
        </div>

        <div className="col-span-1">
          <InsuranceCard
            title="Travel"
            items={[{ label: "Travel", img: travel }]}
          />
        </div>

        <div className="col-span-2">
          <InsuranceCard
            title="Commercial"
            items={[{ label: "SME and others", img: sme }]}
          />
        </div>

      </div>
        </div>

        {/* RIGHT CURVE */}
        <div className="absolute right-0 top-0 h-full w-[38%] hidden lg:block">
          <svg viewBox="0 0 440 709" className="h-full w-full">
            <path
              d="M226.01 364.326C161.303 217.025 1.76207 164.317 0.0156356 8.06031V0H654V673.842C654 673.842 405.101 752.948 318.008 673.842C247.314 609.63 277.479 481.492 226.01 364.326Z"
              fill="#0C77B9"
            />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Hero;

/* ------------ CARD COMPONENT ------------ */

const InsuranceCard = ({ title, items }) => {
  const gridCols =
    items.length === 3 ? "grid-cols-3" :
    items.length === 2 ? "grid-cols-2" :
    "grid-cols-1";

  return (
    <div className="border-3 border-[#9fd0f5] rounded-2xl bg-white overflow-hidden h-full">

      {/* TITLE */}
      <div className="text-center text-lg font-bold text-[#28325A] py-1">
        {title}
      </div>

      {/* ITEMS */}
      <div className={`grid ${gridCols} divide-x divide-y divide-[#9fd0f5]`}>
        {items.map((item, i) => (
          <button
            key={i}
            onClick={item.onClick}
            className="flex flex-col items-center justify-center py-2 gap-2
                       text-md text-black hover:bg-blue-50
                       transition"
          >
            <img src={item.img} alt={item.label} className="h-8 w-40" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
};