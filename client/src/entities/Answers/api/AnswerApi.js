
import axios from 'axios';

const { VITE_TARGET } = import.meta.env;

export class AnswersApi {
  static async getAllAnswers(id) {
    const { data } = await axios.get(`${VITE_TARGET}/answers/${id}/unright`);
    return data;
  }
  static async fullAnswers(id) {
    const { data } = await axios.get(`${VITE_TARGET}/answers/${id}/right`);
    return data;
  }
}
