import axios from 'axios';
import { COMMISH_ROOT_URL } from '../index';

export const pauseDraft = async (leagueId: string, message: string) => {
  try {
    const { data } = await axios.patch(`${COMMISH_ROOT_URL}/pause_draft`, {
      leagueId,
      message,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
