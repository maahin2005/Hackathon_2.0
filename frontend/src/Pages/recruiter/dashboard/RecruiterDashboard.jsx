import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserData } from "../../../redux/features/candidate/candidate";
import CompanyProfile from "../../../components/company/CompanyProfile";
import { fetchCompany } from "../../../redux/features/company/companySlice";
import CompanyForm from "../../../components/company/CreateCompanyForm";
import Footer from "../../../components/Custom/Footer/Footer";

function RecruiterDashboard() {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const recruiter = useSelector((state) => state.user);
  const { company, loading, error } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  const [showCompanyForm, setShowCompanyForm] = useState(false);

  useEffect(() => {
    console.log(showCompanyForm, company)
  }, [showCompanyForm, company]);

  // Fetch recruiter details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/recruiters/me`, {
          withCredentials: true,
        });
        console.log("User:", data.data)
        dispatch(setUserData(data.data));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [dispatch, BASE_URL]);

  useEffect(() => {
    if (recruiter && recruiter._id) {
      dispatch(fetchCompany(recruiter._id));
    }
  }, [dispatch, recruiter]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-20 flex flex-col items-center">
      <div className="max-w-4xl w-full rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-32 relative">
          {recruiter?.profileImage && (<img
            key={recruiter?.profileImage} // Forces re-render when the URL changes
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full border-4 border-white shadow-lg"
            src={recruiter?.profileImage}
            alt="Recruiter Profile"
          />)}
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

        {/* Company List */}
        <div className="px-8 py-4">
          {loading ? (
            <p>Loading company...</p>
          ) : company?.length > 0 ? (
            <>
              <p className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Your Company
              </p>
              <CompanyProfile company={company[0]} />
            </>
          ) : showCompanyForm ? (
            <CompanyForm setVisibility={setShowCompanyForm} />
          ) : (
            <>
              <button
                onClick={() => setShowCompanyForm(true)}
                className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Add Company
              </button>
              <p className="text-gray-500">You haven&apos;t added any company!</p>
            </>
          )}
        </div>
      </div>

      {/* Footer at Bottom */}
      <Footer />
    </div>
  );
}

export default RecruiterDashboard;
