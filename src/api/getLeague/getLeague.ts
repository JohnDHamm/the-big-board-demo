import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const getLeague = async (leagueId: string) => {
  try {
    const { data } = await axios.get(`${API_ROOT_URL}/league/${leagueId}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
