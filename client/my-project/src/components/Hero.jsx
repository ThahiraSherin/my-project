import { useNavigate } from "react-router-dom";
import {
  FaCar,
  FaMotorcycle,
  FaHeartbeat,
  FaPlane,
  FaBriefcase,
  FaUserShield,
  FaGavel,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <h1 className="text-4xl font-bold text-[#0b72b9] mb-3 uppercase">
            Secure Your Future with Smart Insurance
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl">
            Compare, choose, and buy the best insurance plans in minutes.
            Trusted by thousands of customers across India.
          </p>

          {/* INSURANCE CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 max-w-xl">

            {/* LIFE */}
            <Card title="Life" items={[
              { label: "Term Life", icon: <FaUserShield /> },
              { label: "Investment", icon: <FaBriefcase /> },
            ]} />

            {/* MOTOR */}
            <Card title="Motor" items={[
              {
                label: "Car",
                icon: <FaCar />,
                onClick: () => navigate("/car-insurance"),
              },
              { label: "Bike", icon: <FaMotorcycle /> },
              { label: "Legal Aid", icon: <FaGavel /> },
            ]} />

            {/* HEALTH */}
            <Card title="Health" items={[
              { label: "Mediclaim", icon: <FaHeartbeat /> },
              { label: "Super Top Up", icon: <FaHeartbeat /> },
            ]} />

            {/* TRAVEL */}
            <Card title="Travel" items={[
              { label: "Travel", icon: <FaPlane /> },
            ]} />

            {/* COMMERCIAL */}
            <Card title="Commercial" items={[
              { label: "SME & Others", icon: <FaBriefcase /> },
            ]} />
          </div>
        </div>

        {/* RIGHT CURVE SVG */}
        <div className="absolute right-0 top-0 h-full w-[40%] hidden lg:block">
          <svg
            viewBox="0 0 440 709"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M226.01 364.326C161.303 217.025 1.76207 164.317 0.0156356 8.06031C-0.0195445 4.91269 0.0156356 0 0.0156356 0H654V673.842C654 673.842 405.101 752.948 318.008 673.842C247.314 609.63 277.479 481.492 226.01 364.326Z"
              fill="#0C77B9"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

/* ---------------- CARD COMPONENT ---------------- */

const Card = ({ title, items }) => (
  <div className="border-2 border-blue-300 rounded-2xl bg-white overflow-hidden">

    {/* TITLE */}
    <div className="text-center font-semibold text-sm py-3 border-b border-blue-200">
      {title}
    </div>

    {/* ITEMS GRID */}
    <div className="grid grid-cols-2 divide-x divide-y divide-blue-200">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={item.onClick}
          className="flex flex-col items-center justify-center gap-2 py-4
                     text-xs text-gray-700 hover:bg-blue-50
                     hover:text-[#0b72b9] transition"
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>

  </div>
);