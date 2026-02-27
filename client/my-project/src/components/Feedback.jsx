import React from "react";
import FeedImg1 from '../assets/feedback/feedimg1.svg';
import FeedImg2 from "../assets/feedback/feedimg2.svg";

const Feedback = () => {
  return (
    <section className="px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        Trusted By Thousands Of Happy Customers
      </h1>

      <div className="flex justify-center items-center gap-8">
        <img src={FeedImg1} alt="Feedback Image 1" className="w-1/2" />
        <img src={FeedImg2} alt="Feedback Image 2" className="w-1/2" />
      </div>
    </section>
  );
};

export default Feedback;