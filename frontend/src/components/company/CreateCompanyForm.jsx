import { useState } from "react";
import { addCompany, fetchCompany } from "../../redux/features/company/companySlice";
import { useDispatch, useSelector } from "react-redux";

const CompanyForm = ({ setVisibility }) => {
    const recruiter = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [companyData, setCompanyData] = useState({
        name: "",
        industry: "",
        foundedYear: "",
        address: {
            street: "",
            city: "",
            state: "",
            country: "",
            postalCode: "",
        },
        contact: {
            phone: "",
            email: "",
            website: "",
        },
        employees: "",
        revenue: "",
        isPublic: false,
        tags: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.includes("address.") || name.includes("contact.")) {
            const [parent, child] = name.split(".");
            setCompanyData((prev) => ({
                ...prev,
                [parent]: { ...prev[parent], [child]: value },
            }));
        } else {
            setCompanyData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(addCompany(companyData));

            if (addCompany.fulfilled.match(resultAction)) {
                console.log("Company added successfully:", resultAction.payload);

                // Ensure recruiter dashboard fetches updated company
                dispatch(fetchCompany(recruiter._id)); // ✅ This re-fetches the company immediately

                setVisibility(false); // Hide form
            }
        } catch (error) {
            console.error("Error adding company:", error.response?.data || error);
            alert("Failed to add company");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl border border-gray-200 mt-10">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Register a Company</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Company Name & Industry */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Company Name</label>
                        <input
                            type="text"
                            name="name"
                            value={companyData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Industry</label>
                        <input
                            type="text"
                            name="industry"
                            value={companyData.industry}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                </div>

                {/* Address Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="address.street" placeholder="Street" value={companyData.address.street} onChange={handleChange} className="p-2 border rounded-lg" />
                        <input type="text" name="address.city" placeholder="City" value={companyData.address.city} onChange={handleChange} className="p-2 border rounded-lg" />
                        <input type="text" name="address.state" placeholder="State" value={companyData.address.state} onChange={handleChange} className="p-2 border rounded-lg" />
                        <input type="text" name="address.country" placeholder="Country" value={companyData.address.country} onChange={handleChange} className="p-2 border rounded-lg" />
                        <input type="text" name="address.postalCode" placeholder="Postal Code" value={companyData.address.postalCode} onChange={handleChange} className="p-2 border rounded-lg" />
                    </div>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type="text" name="contact.phone" placeholder="Phone" value={companyData.contact.phone} onChange={handleChange} className="p-2 border rounded-lg" />
                        <input type="email" name="contact.email" placeholder="Email" value={companyData.contact.email} onChange={handleChange} className="p-2 border rounded-lg" required />
                        <input type="url" name="contact.website" placeholder="Website" value={companyData.contact.website} onChange={handleChange} className="p-2 border rounded-lg" />
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Number of Employees</label>
                        <input
                            type="number"
                            name="employees"
                            value={companyData.employees}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Revenue (in million $)</label>
                        <input
                            type="number"
                            name="revenue"
                            value={companyData.revenue}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                </div>

                {/* Founded Year & Publicly Traded */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Founded Year</label>
                        <input
                            type="number"
                            name="foundedYear"
                            value={companyData.foundedYear}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isPublic"
                            checked={companyData.isPublic}
                            onChange={handleChange}
                        />
                        <label className="text-gray-700 font-medium">Publicly Traded?</label>
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <label className="block text-gray-700 font-medium">Tags (comma-separated)</label>
                    <input
                        type="text"
                        name="tags"
                        placeholder="e.g. Tech, Startup, AI"
                        value={companyData.tags}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-lg"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                    Register Company
                </button>
            </form>
        </div>
    );
};

export default CompanyForm;
