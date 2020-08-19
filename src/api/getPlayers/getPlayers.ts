import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const getPlayers = async () => {
  try {
    const { data } = await axios.get(`${API_ROOT_URL}/players`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
