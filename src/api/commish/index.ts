import { pauseDraft } from './pauseDraft/pauseDraft';
import { startDraft } from './startDraft/startDraft';

export const COMMISH_ROOT_URL =
  `${process.env.REACT_APP_API_URL}/commish` || 'http://localhost:4001/commish';

export { pauseDraft, startDraft };
