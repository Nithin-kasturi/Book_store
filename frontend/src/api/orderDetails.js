import axios from "axios";

const API_URL = 'https://book-store-ap.vercel.app/order';

export const getOrderD = async () => {
    try {
        const userEmail = JSON.parse(localStorage.getItem("users")).email;
        const response = await axios.post(`${API_URL}/get`, {
            email: userEmail
        });

        return response.data; // Axios automatically parses the response as JSON
    } catch (error) {
        console.error('Error fetching order details:', error);
        throw error;
    }
};
