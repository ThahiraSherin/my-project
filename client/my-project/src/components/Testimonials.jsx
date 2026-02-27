import img1 from "../assets/testimonials/img1.svg";
import img2 from "../assets/testimonials/img2.svg";
import img3 from "../assets/testimonials/img3.svg";

const testimonials = [
  {
    img: img1,
    name: "HARINI",
    city: "NAVI MUMBAI",
    text: "Thank you for supporting me in getting my policy renewed. It was hassle free and smooth process.",
  },
  {
    img: img2,
    name: "SNEHA",
    city: "DELHI",
    text: "I would like to thank you and your team. I got my 4-wheeler renewal in very short notice. Keep it up.",
    active: true,
  },
  {
    img: img3,
    name: "RAJI",
    city: "CHENNAI",
    text: "Thank you for supporting me in getting my policy and writing this to thank you for the...",
  },
];

const Stars = () => (
  <svg
    width="144"
    height="18"
    viewBox="0 0 144 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path d="M14.0006 13.313L9.37161 15.7467L10.2559 10.592L6.50586 6.9417L11.6809 6.1917L13.9954 1.50195L16.3099 6.1917L21.4849 6.9417L17.7349 10.592L18.6191 15.7467L14.0006 13.313Z" stroke="#0C77B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M43.0006 13.313L38.3716 15.7467L39.2559 10.592L35.5059 6.9417L40.6809 6.1917L42.9954 1.50195L45.3099 6.1917L50.4849 6.9417L46.7349 10.592L47.6191 15.7467L43.0006 13.313Z" stroke="#0C77B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M72.0006 13.313L67.3716 15.7467L68.2559 10.592L64.5059 6.9417L69.6809 6.1917L71.9954 1.50195L74.3099 6.1917L79.4849 6.9417L75.7349 10.592L76.6191 15.7467L72.0006 13.313Z" stroke="#0C77B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M101.001 13.313L96.3716 15.7467L97.2559 10.592L93.5059 6.9417L98.6809 6.1917L100.995 1.50195L103.31 6.1917L108.485 6.9417L104.735 10.592L105.619 15.7467L101.001 13.313Z" stroke="#0C77B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M125.369 15.75L126.587 10.4813L122.5 6.9375L127.9 6.46875L130 1.5L132.1 6.46875L137.5 6.9375L133.412 10.4813L134.631 15.75L130 12.9562L125.369 15.75Z" fill="#0C77B9"/>
  </svg>
);

const Testimonials = () => {
  return (
    <section className="bg-blue-50 px-4 pb-16">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#253456] mb-10">
        Testimonials
      </h2>

      {/* Cards */}
      <div className="relative max-w-7xl mx-auto flex items-stretch justify-center gap-8 py-8">

        {/* Left Arrow */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-blue-600">
          ‹
        </button>

        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`bg-blue-100 rounded-xl shadow-md p-6 w-[320px] text-center flex flex-col
              ${item.active ? "-translate-y-6 shadow-lg" : ""}
            `}
          >
            {/* Profile Image */}
            <div className="flex justify-center -mt-14 mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full border-4 border-white"
              />
            </div>

            {/* Name */}
            <h3 className="font-bold text-blue-700">{item.name}</h3>

            {/* City */}
            <p className="text-sm text-gray-500 mb-3">{item.city}</p>

            {/* Stars */}
            <div className="mb-4">
              <Stars />
            </div>

            {/* Review */}
            <p className="text-sm text-gray-600 leading-relaxed min-h-18">
              {item.text}
            </p>
          </div>
        ))}

        {/* Right Arrow */}
        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-blue-600">
          ›
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
        <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimonials;