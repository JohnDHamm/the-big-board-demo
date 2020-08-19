import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const makePick = async (pickData: DraftSelection) => {
  try {
    const { data } = await axios.post(`${API_ROOT_URL}/pick`, pickData);
    return data;
  } catch (err) {
    console.error(err);
  }
};
