import { useNavigate } from "react-router-dom";

const data = [
  "Life Insurance",
  "Health Insurance",
  "Car Insurance",
  "Bike Insurance",
  "Legal Aid Insurance",
  "Travel Insurance",
  "Home Insurance",
  "Commercial Insurance",
];

const InsuranceCards = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item === "Car Insurance") {
      navigate("/car-insurance");
    }
  };

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(item)}
            className="p-6 shadow rounded-xl text-center cursor-pointer 
                       hover:shadow-lg hover:-translate-y-1 transition"
          >
            <h3 className="font-semibold text-lg">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceCards;