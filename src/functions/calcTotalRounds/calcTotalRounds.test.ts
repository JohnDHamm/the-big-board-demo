import calcTotalRounds from './calcTotalRounds';

describe('calcTotalRounds', () => {
  it('given the league positionSlots, returns the total num of rounds', () => {
    const positionSlots: Position_Slot[] = [
      {
        position: 'QB',
        total: 1,
      },
      {
        position: 'RB',
        total: 4,
      },
      {
        position: 'WR',
        total: 2,
      },
      {
        position: 'D',
        total: 1,
      },
    ];
    expect(calcTotalRounds(positionSlots.slice(0, 1))).toEqual(1);
    expect(calcTotalRounds(positionSlots.slice(0, 2))).toEqual(5);
    expect(calcTotalRounds(positionSlots.slice(0, 3))).toEqual(7);
    expect(calcTotalRounds(positionSlots.slice(2, 4))).toEqual(3);
  });
});
