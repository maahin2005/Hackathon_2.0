import React from "react";
import { FaSearch } from "react-icons/fa"; 

const FilterDropdown = ({ label, options }) => {
  return (
    <div>
      <label style={{ color: "white", fontSize: "14px" }}>{label}</label>
      <select style={{ padding: "8px", borderRadius: "5px", marginTop: "5px" }}>
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
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          padding: "10px",
          border: "1px solid gray",
          borderRadius: "8px",
          background: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <FilterDropdown
          label="Car Brand"
          options={[
            { value: "volvo", label: "Volvo" },
            { value: "bmw", label: "BMW" },
            { value: "audi", label: "Audi" },
          ]}
        />
        <FilterDropdown
          label="Location"
          options={[
            { value: "delhi", label: "Delhi" },
            { value: "mumbai", label: "Mumbai" },
            { value: "bangalore", label: "Bangalore" },
          ]}
        />
        <FilterDropdown
          label="Experience"
          options={[
            { value: "fresher", label: "Fresher" },
            { value: "1-3", label: "1-3 Years" },
            { value: "3-5", label: "3-5 Years" },
          ]}
        />

        {/* Search Bar */}
        <div style={{ position: "relative" }}>
          <FaSearch
            style={{
              
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "gray",
            }}
          />
          <input
            type="text"
            placeholder="Search Employee..."
            style={{
              padding: "8px",
              paddingLeft: "30px",
              borderRadius: "5px",
              border: "1px solid gray",
              width: "300px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterHeader;
