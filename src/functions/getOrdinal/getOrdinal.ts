const getOrdinal = (number: number): string => {
  let numToUse = number.toString();
  if (number > 20) {
    numToUse = number.toString().slice(-1);
  }
  let ordinal = 'TH';
  switch (numToUse) {
    case '1':
      ordinal = 'ST';
      break;
    case '2':
      ordinal = 'ND';
      break;
    case '3':
      ordinal = 'RD';
      break;
  }
  return ordinal;
};

export default getOrdinal;
