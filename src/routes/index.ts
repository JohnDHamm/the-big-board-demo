const protectedRoutePath = '/app';

export const ROUTES = {
  APP: protectedRoutePath,
  APP_LOADING: `${protectedRoutePath}/loading`,
  HOME: '/',
  BOARD: `${protectedRoutePath}/board`,
  PLAYERS: `${protectedRoutePath}/players`,
  MY_TEAM: `${protectedRoutePath}/my-team`,
  MORE: `${protectedRoutePath}/more`,
};
