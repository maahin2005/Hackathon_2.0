import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserData } from "../../../redux/features/candidate/candidate";

function RecruiterDashboard() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const recruiter = useSelector((state) => state.user);
  const dispatch = useDispatch();
// console.log(recruiter)
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [editingCompanyId, setEditingCompanyId] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({
    name: "",
    industry: "",
    location: "",
    description: "",
  });

  // Fetch recruiter details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/recruiters/me`, {
          withCredentials: true,
        });
        // console.log("User:", data.data)
        dispatch(setUserData(data.data));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [dispatch]);

  // Fetch all companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/companies`, {
          withCredentials: true,
        });
        setCompanies(data.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };
    fetchCompanies();
  }, []);

  const handleChange = (e) => {
    setCompany((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCompanyId) {
        // Update company
        await axios.put(`${BASE_URL}/companies/update/${editingCompanyId}`, company, {
          withCredentials: true,
        });
        setEditingCompanyId(null);
      } else {
        // Create new company
        await axios.post(`${BASE_URL}/companies`, company, {
          withCredentials: true,
        });
      }
      setCompany({ name: "", industry: "", location: "", description: "" });
      setShowCompanyForm(false);
      window.location.reload(); // Refresh the list
    } catch (error) {
      console.error("Error submitting company:", error);
    }
  };

  const handleEdit = (company) => {
    setCompany(company);
    setEditingCompanyId(company._id);
    setShowCompanyForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/companies/delete/${id}`, {
        withCredentials: true,
      });
      setCompanies(companies.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div className="my-20 flex flex-col items-center">
      <div className="max-w-4xl w-full rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 relative">
          <img
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full border-4 border-white shadow-lg"
            src={recruiter?.profileImage}
            alt="Recruiter Profile"
          />
        </div>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-800">{recruiter.name}</h2>
          <p className="text-sm text-gray-600">{recruiter.role}</p>
        </div>
        <div className="flex justify-center mt-6 space-x-8">
          {[{
            label: "Years of Experience",
            value: recruiter.experienceInYear + "+"
          }, {
            label: "Candidates Placed",
            value: "500+"
          }, {
            label: "Success Rate",
            value: "95%"
          }].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="px-8 py-6 text-center text-gray-700">
          {recruiter.name} is a seasoned recruiter with over {recruiter.experienceInYear} years of experience specializing in tech recruitment.
        </div>

        {/* Company Form */}
        <div className="px-8 py-4">
          {!showCompanyForm ? (
            <button
              onClick={() => setShowCompanyForm(true)}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Add Company
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">{editingCompanyId ? "Edit Company" : "Create a Company"}</h3>
              {["name", "industry", "location"].map((field) => (
                <input
                  key={field}
                  type="text"
                  name={field}
                  value={company[field]}
                  onChange={handleChange}
                  placeholder={`Company ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              ))}
              <textarea
                name="description"
                value={company.description}
                onChange={handleChange}
                placeholder="Company Description"
                className="w-full border border-gray-300 p-2 rounded-md h-24"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                {editingCompanyId ? "Update Company" : "Create Company"}
              </button>
            </form>
          )}
        </div>

        {/* Company List */}
        <div className="px-8 py-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Companies</h3>
          {companies.length === 0 ? (
            <p className="text-gray-500">No companies added yet.</p>
          ) : (
            <ul className="space-y-4">
              {companies.map((comp) => (
                <li key={comp._id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                  <div>
                    <p className="font-semibold text-gray-800">{comp.name}</p>
                    <p className="text-gray-600 text-sm">{comp.industry} - {comp.location}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(comp)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(comp._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
