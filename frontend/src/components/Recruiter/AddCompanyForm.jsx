import PropTypes from 'prop-types';

function AddCompanyForm() {
    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
                {editingCompanyId ? "Edit Company" : "Create a Company"}
            </h3>

            {/* Basic Details */}
            <input
                type="text"
                name="name"
                value={company.name}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="text"
                name="industry"
                value={company.industry}
                onChange={handleChange}
                placeholder="Industry (e.g., IT, Finance)"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="number"
                name="foundedYear"
                value={company.foundedYear}
                onChange={handleChange}
                placeholder="Founded Year"
                className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
                type="number"
                name="employees"
                value={company.employees}
                onChange={handleChange}
                placeholder="Number of Employees"
                className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
                type="number"
                name="revenue"
                value={company.revenue}
                onChange={handleChange}
                placeholder="Annual Revenue"
                className="w-full border border-gray-300 p-2 rounded-md"
            />

            {/* Address Fields */}
            <h4 className="text-md font-semibold text-gray-700">Address</h4>
            <input
                type="text"
                name="address.street"
                value={company.address?.street || ""}
                onChange={handleChange}
                placeholder="Street Address"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="text"
                name="address.city"
                value={company.address?.city || ""}
                onChange={handleChange}
                placeholder="City"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="text"
                name="address.state"
                value={company.address?.state || ""}
                onChange={handleChange}
                placeholder="State"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="text"
                name="address.postalCode"
                value={company.address?.postalCode || ""}
                onChange={handleChange}
                placeholder="Postal Code"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="text"
                name="address.country"
                value={company.address?.country || ""}
                onChange={handleChange}
                placeholder="Country"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />

            {/* Contact Details */}
            <h4 className="text-md font-semibold text-gray-700">Contact Details</h4>
            <input
                type="text"
                name="contact.phone"
                value={company.contact?.phone || ""}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="email"
                name="contact.email"
                value={company.contact?.email || ""}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 p-2 rounded-md"
                required
            />
            <input
                type="url"
                name="contact.website"
                value={company.contact?.website || ""}
                onChange={handleChange}
                placeholder="Website (optional)"
                className="w-full border border-gray-300 p-2 rounded-md"
            />

            {/* Additional Fields */}
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="isPublic"
                    checked={company.isPublic || false}
                    onChange={(e) =>
                        handleChange({
                            target: { name: "isPublic", value: e.target.checked },
                        })
                    }
                    className="h-4 w-4"
                />
                <span className="text-gray-800">Is Publicly Traded?</span>
            </label>

            <textarea
                name="description"
                value={company.description}
                onChange={handleChange}
                placeholder="Company Description"
                className="w-full border border-gray-300 p-2 rounded-md h-24"
                required
            ></textarea>

            <input
                type="text"
                name="tags"
                value={company.tags?.join(", ") || ""}
                onChange={(e) =>
                    handleChange({
                        target: { name: "tags", value: e.target.value.split(", ") },
                    })
                }
                placeholder="Tags (comma-separated)"
                className="w-full border border-gray-300 p-2 rounded-md"
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                {editingCompanyId ? "Update Company" : "Create Company"}
            </button>
        </form>

    );
}

AddCompanyForm.propTypes = {
    props: PropTypes.any
};

export default AddCompanyForm;