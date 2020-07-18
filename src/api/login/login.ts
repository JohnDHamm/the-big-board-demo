import axios from 'axios';
import { DEV_API_ROOT_URL } from '../index';

export const login = async (loginData: UserLogin) => {
  try {
    const { data } = await axios.post(
      `${DEV_API_ROOT_URL}/API/login`,
      loginData
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
