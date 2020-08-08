import axios from 'axios';
import { DEV_API_ROOT_URL } from '../index';

export const makePick = async (pickData: DraftSelection) => {
  try {
    const { data } = await axios.post(`${DEV_API_ROOT_URL}/api/pick`, pickData);
    return data;
  } catch (err) {
    console.error(err);
  }
};
