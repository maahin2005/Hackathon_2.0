import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    description: "The name of the company",
  },
  address: {
    street: {
      type: String,
      // required: true,
      description: "The street address of the company",
    },
    city: {
      type: String,
      // required: true,
      description: "The city where the company is located",
    },
    state: {
      type: String,
      // required: true,
      description: "The state where the company is located",
    },
    postalCode: {
      type: String,
      // required: true,
      description: "The postal code of the company's location",
    },
    country: {
      type: String,
      // required: true,
      description: "The country where the company is located",
    },
  },
  contact: {
    phone: {
      type: String,
      // required: true,
      description: "The phone number of the company",
    },
    email: {
      type: String,
      // required: true,
      description: "The email address of the company",
    },
    website: {
      type: String,
      description: "The website URL of the company",
    },
  },
  industry: {
    type: String,
    description:
      "The industry in which the company operates. ex. IT, non-IT, etc",
  },
  foundedYear: {
    type: Number,
    description: "The year the company was founded",
  },
  employees: {
    type: Number,
    description: "The number of employees in the company",
  },
  revenue: {
    type: Number,
    description: "The annual revenue of the company",
  },
  isPublic: {
    type: Boolean,
    description: "Indicates whether the company is publicly traded",
  },
  tags: {
    type: [String],
    description: "Tags associated with the company",
  },

  registeredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
    unique: true,
  },
});

const CompanyModel = mongoose.model("Company", companySchema);

export default CompanyModel;
