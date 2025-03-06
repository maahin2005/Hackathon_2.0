import React, { useState } from "react";

const CompanyFilterNavbar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    industry: "",
    location: "",
    size: "",
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px", background: "#f8f9fa" }}>
      <input
        type="text"
        name="search"
        placeholder="Search company..."
        value={filters.search}
        onChange={handleChange}
        style={{ padding: "8px", flex: "1" }}
      />
      <select name="industry" value={filters.industry} onChange={handleChange} style={{ padding: "8px" }}>
        <option value="">All Industries</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Healthcare">Healthcare</option>
      </select>
      <select name="location" value={filters.location} onChange={handleChange} style={{ padding: "8px" }}>
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
      </select>
      <select name="size" value={filters.size} onChange={handleChange} style={{ padding: "8px" }}>
        <option value="">All Sizes</option>
        <option value="Small">Small (1-50)</option>
        <option value="Medium">Medium (51-500)</option>
        <option value="Large">Large (500+)</option>
      </select>
      <button onClick={() => onFilterChange(filters)} style={{ padding: "8px 12px", background: "#007bff", color: "white", border: "none", cursor: "pointer" }}>
        Apply Filters
      </button>
    </div>
  );
};

export default CompanyFilterNavbar;
