import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import ProductInfo from "../components/ProductInfo";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductInfo />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;