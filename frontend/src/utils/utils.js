import axios from "axios"
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchCompany = (recruiterId) => {
    axios
        .get(`${BASE_URL}/companies/${recruiterId}`) // Adjust API endpoint as needed
        .then((res) => res.data.data)
        .catch(() => null);
}