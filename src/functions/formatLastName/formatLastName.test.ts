import formatLastName from './formatLastName';

describe('formatLastName', () => {
  it('returns formatted last name', () => {
    expect(formatLastName('Something')).toEqual('SOMETHING');
    expect(formatLastName('Some-Thing')).toEqual('SOME-THING');
    // TODO - change formatting
    // expect(formatLastName('McSomething')).toEqual('McSOMETHING');
    // expect(formatLastName('McSome-Thing')).toEqual('McSOME-THING');
  });
});
