import getOrdinal from './getOrdinal';

describe('getOrdinal', () => {
  it('returns proper ordinal text for a number', () => {
    expect(getOrdinal(1)).toEqual('ST');
    expect(getOrdinal(2)).toEqual('ND');
    expect(getOrdinal(3)).toEqual('RD');
    expect(getOrdinal(4)).toEqual('TH');
    expect(getOrdinal(11)).toEqual('TH');
    expect(getOrdinal(20)).toEqual('TH');
    expect(getOrdinal(31)).toEqual('ST');
    expect(getOrdinal(42)).toEqual('ND');
    expect(getOrdinal(53)).toEqual('RD');
    expect(getOrdinal(64)).toEqual('TH');
    expect(getOrdinal(65)).toEqual('TH');
    expect(getOrdinal(66)).toEqual('TH');
    expect(getOrdinal(67)).toEqual('TH');
    expect(getOrdinal(68)).toEqual('TH');
    expect(getOrdinal(69)).toEqual('TH');
  });
});
