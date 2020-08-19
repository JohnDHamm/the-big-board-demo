import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const login = async (loginData: UserLogin) => {
  try {
    const { data } = await axios.post(`${API_ROOT_URL}/login`, loginData);
    return data;
  } catch (err) {
    console.error(err);
  }
};
