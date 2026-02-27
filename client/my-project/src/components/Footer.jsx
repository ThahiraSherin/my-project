import logo from "../assets/logos/logo.svg";
import icons from "../assets/footer/icons.svg";

const Footer = () => {
  return (
    <footer className="bg-[#D3DCE7] text-[#253456] px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div className="space-y-4">
            <img src={logo} alt="Insure Correct" className="w-60" />

            {/* <p className="text-sm leading-relaxed text-[#4A5A73]">
              Our vision is to provide convenience and help increase your sales business.
            </p> */}

            <img src={icons} alt="Social Icons" className="w-60" />
          </div>

          {/* Know Us */}
          <div>
            <h4 className="font-semibold mb-4">Know Us</h4>
            <ul className="space-y-2 text-sm text-[#4A5A73]">
              <li>About Us &gt;</li>
              <li>Privacy Policy &gt;</li>
              <li>Disclaimer &gt;</li>
              <li>Terms and Conditions &gt;</li>
              <li>Careers &gt;</li>
              <li>Contact Us &gt;</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-[#4A5A73]">
              <li>IRDA &gt;</li>
              <li>Way2Wealth &gt;</li>
              <li>Way2Wealth Insurance Brokers &gt;</li>
              <li>Employee Benefits Portal &gt;</li>
              <li>Sitemap &gt;</li>
            </ul>
          </div>

          {/* Useful Tools */}
          <div>
            <h4 className="font-semibold mb-4">Useful Tools</h4>
            <ul className="space-y-2 text-sm text-[#4A5A73]">
              <li>Track Claim Status &gt;</li>
              <li>Life Insurance Medical Grid &gt;</li>
              <li>Health Insurance Medical Grid &gt;</li>
              <li>Network Hospitals &gt;</li>
              <li>Renewal Links &gt;</li>
              <li>Track Application &gt;</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#B9C6D8] mt-10 pt-4">
          <p className="text-xs text-[#4A5A73]">
            ©2026 Company Name. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;