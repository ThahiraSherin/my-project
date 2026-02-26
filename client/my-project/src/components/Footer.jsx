const Footer = () => {
  return (
    <footer className="bg-blue-100 text-black px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="font-bold text-blue-500 mb-3">Insure<span className="text-green-500">Correct</span></h1>
          <p>Our vision is to provide convinience and help increase your sales business</p>
        </div>
        <div>
          <h4 className="font-bold  text-black mb-2">Know Us</h4>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>careers</p>

        </div>
        <div>
          <h4 className="font-bold  text-black mb-2">Links</h4>
          <p>IRDA</p>
          <p>Way2Wealth</p>
          <p>Way2Wealth Insurance Brokers</p>
          <p>Sitemap</p>
        </div>
        <div>
          <h4 className="font-bold text-black mb-2">Useful Tools</h4>
          <p>Track Claim Status</p>
          <p>Life Insurance Medical Grid</p>
          <p>Health Insurance Medical Grid</p>
          <p>Network Hospitals</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;