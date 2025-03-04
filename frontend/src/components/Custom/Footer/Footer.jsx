import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">About Us</h3>
          <p className="text-gray-300">
            Our AI-powered platform connects recruiters with top tech talent
            based on real GitHub contributions, ensuring skill-based hiring.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/jobseeker/dashboard"
                className="text-gray-300 hover:text-blue-400 transition-all"
              >
                Find a Job
              </Link>
            </li>
            <li>
              <Link
                to="/recruiter/dashboard"
                className="text-gray-300 hover:text-blue-400 transition-all"
              >
                Hire Talent
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="text-gray-300 hover:text-blue-400 transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-300 hover:text-blue-400 transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-blue-400">Contact Us</h3>
          <p className="text-gray-300">📍 New Delhi, India</p>
          <p className="text-gray-300">📧 akm4.dev.connect@gmail.com</p>
          <div className="flex space-x-4">
            <a
              href="/"
              className="text-gray-300 hover:text-blue-400 transition-all text-2xl"
            >
              🔗
            </a>
            <a
              href="/about-us"
              className="text-gray-300 hover:text-blue-400 transition-all text-2xl"
            >
              📘
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-blue-400 transition-all text-2xl"
            >
              🐦
            </a>
          </div>
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
