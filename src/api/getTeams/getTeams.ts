import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const getTeams = async () => {
  try {
    const { data } = await axios.get(`${API_ROOT_URL}/teams`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
