import man from "../assets/product/man.svg";
import leftside from "../assets/product/leftside.svg";


const ProductInfo = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl flex flex-col justify-center">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-[#1F2A44] mb-4">
            Product Information
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm leading-loose mb-4 gap-8">
            Understanding insurance product features can be cumbersome. With policy
            wordings running into several pages, it would be difficult for you to read <br/>
            through and grasp the fine print. We have taken the effort to simplify and <br/>
            have created one pagers with all important points required to make an <br/>
            informed purchase!
          </p>

          {/* PLAN BUTTON (LEFT IMAGE BLOCK) */}
          <div className="flex items-start bg-white text-white rounded-lg ">
            <img src={leftside} alt="Left Side" className="w-100 h-60" />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
          <img
            src={man}
            alt="Man"
            className="w-100"
          />
        </div>

      </div>
    </section>
  );
};

export default ProductInfo;