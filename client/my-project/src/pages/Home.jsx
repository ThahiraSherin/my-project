import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import ProductInfo from "../components/ProductInfo";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Millions from "../components/Millions";
import Feedback from "../components/Feedback";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductInfo />
      <Millions />
      <Testimonials />
      <Feedback/>
      <Footer />
    </>
  );
};

export default Home;