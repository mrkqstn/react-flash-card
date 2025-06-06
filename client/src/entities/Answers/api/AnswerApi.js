import axios from 'axios'

const { VITE_TARGET } = import.meta.env

export class AnswersApi {

  static async getAllAnswers() {
    const { data } = await axios.get(`${VITE_TARGET}/answers/:id/unright`);
     if (!data.data) throw new Error('Данные отсутствуют');
    return data;
  };
 static async fullAnswers() {
    const { data } = await axios.get(`${VITE_TARGET}/answers/id/right`);
     if (!data.data) throw new Error('Данные отсутствуют');
    return data;
  }}
