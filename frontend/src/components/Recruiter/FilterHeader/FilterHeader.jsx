import React from "react";
import { FaSearch } from "react-icons/fa";

const FilterDropdown = ({ label, options }) => {
  return (
    <div>
      <select
        style={{
          padding: "10px",
          borderRadius: "8px",
          marginTop: "5px",
          border: "1px solid #ccc",
          background: "#fff",
          width: "180px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const FilterHeader = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        className="p-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",

          borderRadius: "12px",
          background: "rgba(173, 216, 230, 0.3)", // Light blue background
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
          justifyContent: "space-evenly",
        }}
      >
        {/* Employee Type */}
        <FilterDropdown
          label="Employee Type"
          options={[
            { value: "dsa", label: "DSA" },
            { value: "da", label: "DA" },
            { value: "mern", label: "MERN" },
            { value: "mean", label: "MEAN" },
          ]}
        />

        {/* Score */}
        <FilterDropdown
          label="Score"
          options={[
            { value: "above_6", label: "Above 6" },
            { value: "between_7_8", label: "Between 7 and 8" },
            { value: "above_10", label: "Above 10" },
          ]}
        />

        {/* Location */}
        <FilterDropdown
          label="Location"
          options={[
            { value: "delhi", label: "Delhi" },
            { value: "bangalore", label: "Bangalore" },
            { value: "pune", label: "Pune" },
            { value: "gujarat", label: "Gujarat" },
          ]}
        />

        {/* Experience */}
        <FilterDropdown
          label="Experience"
          options={[
            { value: "fresher", label: "Fresher" },
            { value: "1-3", label: "1-3 Years" },
            { value: "3-5", label: "3-5 Years" },
          ]}
        />

        {/* Search Bar */}
        <div style={{ position: "relative", width: "300px" }}>
          <FaSearch
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "gray",
            }}
          />
          <input
            type="text"
            placeholder="Search Employee..."
            style={{
              padding: "10px",
              paddingLeft: "35px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "100%",
              background: "#fff",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
