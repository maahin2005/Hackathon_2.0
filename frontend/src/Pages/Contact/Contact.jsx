import React, { useEffect, useState } from "react";
import Navbar from "../../components/Custom/Navbar/Navbar";
import Footer from "../../components/Custom/Footer/Footer";
import axios from "axios";
import Toast from "./../../components/Custom/Toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const validateForm = () => {
    let newErrors = {};

    // Name Validation: Cannot be empty
    if (!formData.name.trim()) {
      newErrors.name = "Name is required!";
    }

    // Email Validation: Must match "678@gmail.com" format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format! Example: hello@gmail.com";
    }

    // Phone Number Validation: Exactly 10 digits
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    validateForm();
  };

  const sendEmail = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/mail/send`, data);
      console.log("res?.data=> ", res?.data);
      if (res?.data.success) {
        showToast(res.data?.message, "success");
        setLoading(false);
      } else {
        setLoading(false);
        showToast(res?.data?.message, "error");
      }
    } catch (error) {
      showToast(res?.data?.message, "error");
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setErrors({});
      sendEmail(formData);
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={handleCloseToast}
        />
      )}
      <div className="py-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 p-6">
        <div className="p-10 my-20 rounded-lg shadow-2xl max-w-3xl w-full bg-white relative">
          <h2 className="text-6xl font-[Kanit] font-semibold text-blue-700 mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-6">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-800 font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold">
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-800 font-semibold">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full max-h-80 min-h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 cursor-pointer text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
              disabled={Object.keys(errors).length > 0}
            >
              {loading ? "Loading..." : "Contact Now!"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
