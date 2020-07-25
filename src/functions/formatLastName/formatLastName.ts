const formatLastName = (lastName: string): string => {
  //TODO: handle needed lowercase letters
  // e.g. McCaffrey => McCAFFREY
  // e.g. McSome-Thing => McSOME-THING
  return lastName.toUpperCase();
};

export default formatLastName;
