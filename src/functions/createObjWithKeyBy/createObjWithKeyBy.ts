import keyby from 'lodash.keyby';

export const createObjWithKeyBy = (array: Array<any>, key: string) =>
  keyby(array, key);
