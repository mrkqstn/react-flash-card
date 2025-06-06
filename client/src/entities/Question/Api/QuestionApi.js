import axios from 'axios'

const { VITE_TARGET } = import.meta.env

export default class UserApi {
  static async getAllGamesByTheme(themeId) {
    const { data } = await axios.get(`${VITE_TARGET}/questions/${themeId}`);
    if (!data.data) throw new Error('Вопросы отсутствуют');
    return data;
  }

  static async getAllGamesByThemeAndId(themeId, id) {
    const { data } = await axios.get(`${VITE_TARGET}/questions/${themeId}/${id}`);
    if (!data.data) throw new Error('Данные отсутствуют');
    return data;
  }
}