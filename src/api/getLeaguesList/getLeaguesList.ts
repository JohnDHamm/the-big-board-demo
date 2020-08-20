import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const getLeaguesList = async () => {
  try {
    const { data } = await axios.get(`${API_ROOT_URL}/leagues-list`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
