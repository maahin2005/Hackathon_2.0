import PropTypes from "prop-types";
import { FaGlobe, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const CompanyProfile = ({ company }) => {
  if (!company) return null;
  console.log("Company data:", company);

  const {
    name,
    companyProfile,
    address,
    contact,
    industry,
    foundedYear,
    employees,
    revenue,
    isPublic,
    tags
  } = company;

  return (
    <div className="relative my-20 max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-200">
        <img
          src={companyProfile}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
          <p className="text-lg text-gray-700 font-medium mt-2">{industry}</p>
          {foundedYear && (
            <p className="text-gray-600">Founded in {foundedYear}</p>
          )}
        </div>
      </div>

      {/* Address Section */}
      {address && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-gray-900">Address</h2>
          <p className="text-gray-700 flex items-center gap-2">
            <FaMapMarkerAlt /> {address.street}, {address.city}, {address.state}, {address.country} - {address.postalCode}
          </p>
        </div>
      )}

      {/* Contact Section */}
      {contact && (
        <div className="my-6">
          <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
          <p className="text-gray-700 flex items-center gap-2">
            <FaPhone /> {contact.phone}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <FaEnvelope /> {contact.email}
          </p>
          {contact.website && (
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 flex items-center gap-2 mt-2 hover:underline"
            >
              <FaGlobe /> {contact.website}
            </a>
          )}
        </div>
      )}

      {/* Additional Information */}
      <div className="my-6">
        <h2 className="text-2xl font-semibold text-gray-900">Company Details</h2>
        <p className="text-gray-700">Employees: {employees}</p>
        <p className="text-gray-700">Revenue: ${revenue}M</p>
        <p className="text-gray-700">Publicly Traded: {isPublic ? "Yes" : "No"}</p>
      </div>

      {/* Tags */}
      {tags?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes validation
CompanyProfile.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    companyProfile: PropTypes.string,
    industry: PropTypes.string.isRequired,
    foundedYear: PropTypes.number,
    employees: PropTypes.number,
    revenue: PropTypes.number,
    isPublic: PropTypes.bool,
    tags: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      postalCode: PropTypes.string,
    }),
    contact: PropTypes.shape({
      phone: PropTypes.string,
      email: PropTypes.string,
      website: PropTypes.string,
    }),
  }).isRequired,
};

export default CompanyProfile;
