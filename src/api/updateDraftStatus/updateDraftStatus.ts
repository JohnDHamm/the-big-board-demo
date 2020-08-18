import axios from 'axios';
import { DEV_API_ROOT_URL } from '../index';

export const updateDraftStatus = async (
  leagueId: string,
  draftStatus: DraftStatus
) => {
  try {
    const {
      data,
    } = await axios.patch(`${DEV_API_ROOT_URL}/api/draft_status/${leagueId}`, {
      draftStatus,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
