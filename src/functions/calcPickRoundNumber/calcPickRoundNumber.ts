const calcPickRoundNumber = (
  pickNum: number,
  picksPerRound: number
): number => {
  return Math.ceil(pickNum / picksPerRound);
};

export default calcPickRoundNumber;
