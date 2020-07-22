import calcPickRoundNumber from './calcPickRoundNumber';

describe('calcPickRoundNumber', () => {
  it('given a pickNumber and picksPerRound, returns the correct roundNumber', () => {
    expect(calcPickRoundNumber(3, 4)).toEqual(1);
    expect(calcPickRoundNumber(16, 12)).toEqual(2);
    expect(calcPickRoundNumber(42, 10)).toEqual(5);
  });
});
