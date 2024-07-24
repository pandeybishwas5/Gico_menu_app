import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getMenuItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/menu/`);
        return response.data.items; 
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
};
