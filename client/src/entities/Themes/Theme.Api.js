import axios from 'axios';

const { VITE_TARGET } = import.meta.env;

export default class ThemeApi  {
    static async getAllThemes() {
        try {
            const response = await axios.get(`${VITE_TARGET}/themes`);
            return response.data;
        } catch (error) {
            console.log('Ошибка при получении тем:', error);
        }
    }
}
