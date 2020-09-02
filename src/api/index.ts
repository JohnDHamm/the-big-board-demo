import { getLeague } from './getLeague/getLeague';
import { getLeaguesList } from './getLeaguesList/getLeaguesList';
import { getOverallRankings } from './getOverallRankings/getOverallRankings';
import { getOwners } from './getOwners/getOwners';
import { getPicks } from './getPicks/getPicks';
import { getPlayers } from './getPlayers/getPlayers';
import { getPositionRankings } from './getPositionRankings/getPositionRankings';
import { getTeams } from './getTeams/getTeams';
import { login } from './login/login';
import { makePick } from './makePick/makePick';
import { updateDraftStatus } from './updateDraftStatus/updateDraftStatus';

import { pauseDraft, reopenDraft, startDraft } from './commish';

export const API_ROOT_URL =
  `${process.env.REACT_APP_API_URL}/api` || 'http://localhost:4001/api';

export {
  getLeague,
  getLeaguesList,
  getOverallRankings,
  getOwners,
  getPicks,
  getPlayers,
  getPositionRankings,
  getTeams,
  login,
  makePick,
  pauseDraft,
  reopenDraft,
  startDraft,
  updateDraftStatus,
};
