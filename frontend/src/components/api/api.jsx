import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getMenuItems = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/menuitems/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
};
