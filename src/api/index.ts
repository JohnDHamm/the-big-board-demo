import { getLeague } from './getLeague/getLeague';
import { getLeaguesList } from './getLeaguesList/getLeaguesList';
import { getOwners } from './getOwners/getOwners';
import { getPicks } from './getPicks/getPicks';
import { getPlayers } from './getPlayers/getPlayers';
import { getPositionRankings } from './getPositionRankings/getPositionRankings';
import { getTeams } from './getTeams/getTeams';
import { login } from './login/login';
import { makePick } from './makePick/makePick';
import { updateDraftStatus } from './updateDraftStatus/updateDraftStatus';

// export const DEV_API_ROOT_URL = 'http://localhost:4001';
export const DEV_API_ROOT_URL = 'https://big-board-server.herokuapp.com';

export {
  getLeague,
  getLeaguesList,
  getOwners,
  getPicks,
  getPlayers,
  getPositionRankings,
  getTeams,
  login,
  makePick,
  updateDraftStatus,
};
