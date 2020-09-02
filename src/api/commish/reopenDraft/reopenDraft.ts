import axios from 'axios';
import { COMMISH_ROOT_URL } from '../index';

export const reopenDraft = async (leagueId: string, message: string) => {
  try {
    const { data } = await axios.patch(`${COMMISH_ROOT_URL}/reopen_draft`, {
      leagueId,
      message,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
