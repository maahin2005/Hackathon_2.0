import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 relative shadow-lg">
      {/* Glowing Border - All 4 Sides */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-md shadow-blue-500/70"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-md shadow-blue-500/70"></div>
      <div className="absolute top-0 left-0 h-full w-1 bg-blue-500 shadow-md shadow-blue-500/70"></div>
      <div className="absolute top-0 right-0 h-full w-1 bg-blue-500 shadow-md shadow-blue-500/70"></div>

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">About Us</h3>
          <p className="text-gray-300">
            Our AI-powered platform connects recruiters with top tech talent based on real GitHub contributions, ensuring skill-based hiring.
          </p>
        </div>

      {/* Quick Links (Left-aligned) */}
<div className="flex flex-col items-start space-y-4">
  <h3 className="text-2xl font-bold text-blue-400">Quick Links</h3>
  <ul className="flex flex-col">
    <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-all">About</Link></li>
    <li><Link to="/contactus" className="text-gray-300 hover:text-blue-400 transition-all">Contact</Link></li>
    <li><Link to="/support" className="text-gray-300 hover:text-blue-400 transition-all">Support</Link></li>
  </ul>
</div>


        {/* Support Section with LinkedIn Profile */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Support</h3>
          <p className="text-gray-300">If you need support, reach out to us.</p>
          <a href="https://www.linkedin.com/in/shivanipandey5678" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition-all">Our Profile</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 text-center text-gray-400 pt-4 text-sm">
        © {new Date().getFullYear()} YourPlatform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
