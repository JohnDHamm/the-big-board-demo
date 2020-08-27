import axios from 'axios';
import { API_ROOT_URL } from '../index';

export const getOverallRankings = async (scoringType: ScoringType) => {
  try {
    const { data } = await axios.get(
      `${API_ROOT_URL}/overall_rankings/${scoringType}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
