import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const updateDraftStatus = async (
  leagueId: string,
  draftStatus: DraftStatus
) => {
  try {
    const { data } = await axios.patch(
      `${API_ROOT_URL}/draft_status/${leagueId}`,
      {
        draftStatus,
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
