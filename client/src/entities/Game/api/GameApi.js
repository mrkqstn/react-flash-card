import axios from 'axios'

export default class UserApi {
  static async getAllGames() {
    const { data } = await axios.get(`${VITE_TARGET}/games/`);
    if (!data.data) throw new Error('Данные отсутствуют');
    return data;
  }

  static async getAllGamesByTheme(id) {
    const { data } = await axios.get(`${VITE_TARGET}/games/${id}`);
    if (!data.data) throw new Error('Данные отсутствуют');
    return data;
  }

  //333
}
