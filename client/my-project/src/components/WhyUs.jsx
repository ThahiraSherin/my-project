import unbiased from "../assets/whyUs/unbiased.svg";
import secure from "../assets/whyUs/secure.svg";
import hassle from "../assets/whyUs/hassle.svg";

const WhyUs = () => {
  return (
    <section className="bg-blue-50 px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-[#253456] mb-6 text-center">
          Why Us?
        </h1>

        {/* DESCRIPTION (EQUAL START & END) */}
        <p className="text-gray-500 text-md leading-relaxed max-w-3xl mb-12">
          We focus on the basic aspects of keeping the entire experience of buying and managing
          <br />
          insurance simple and efficient. Unbiased Advisory, Secure Transaction and Hassle Free Claims
          <br />
          support are the major pillars of our service offering at InsureCorrect!
        </p>

        {/* ICONS WITH TEXT UNDER EACH */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

          {/* ITEM 1 */}
          <div className="flex flex-col items-center">
            <img
              src={unbiased}
              alt="Unbiased Advisory"
              className="h-20 w-20 mb-4"
            />
            <p className="text-[#12151f] font-medium">
              Unbiased & <br/>
              Robust Advisory
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col items-center">
            <img
              src={secure}
              alt="Secure Transactions"
              className="h-20 w-20 mb-4"
            />
            <p className="text-[#12151f] font-medium">
              Secure,<br/>
             Online Purchase
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col items-center">
            <img
              src={hassle}
              alt="Hassle Free Claims"
              className="h-20 w-20 mb-4"
            />
            <p className="text-[#12151f] font-medium">
              Hassle Free<br/>
              Claims Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;