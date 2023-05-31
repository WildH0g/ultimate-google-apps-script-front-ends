/* eslint-env jest */
import LastUsed from '../src/LastUsed.class';

describe('Last Used Emojis', () => {
  it('Adding emoji to an empty list', () => {
    const lastUsed = new LastUsed({});
    lastUsed.add('🫣');
    const expectedResult = ['🫣'];
    expect(lastUsed.list()).toEqual(expectedResult);
  });

  it('Adding a new emoji to a list that is not full', () => {
    const lastUsed = new LastUsed({});
    lastUsed.add('🤮').add('🤕').add('😷');
    const expectedResult = ['😷', '🤕', '🤮'];
    expect(lastUsed.list()).toEqual(expectedResult);
  });

  it('Reusing an emoji that is already in qthe list', () => {
    const lastUsed = new LastUsed({});
    lastUsed.add('😪').add('😬').add('😝').add('😜').add('😪');
    const expectedResult = ['😪', '😜', '😝', '😬'];
    expect(lastUsed.list()).toEqual(expectedResult);
  });

  it('Adding a new emoji when the list is full', () => {
    const lastUsed = new LastUsed({});
    const list = ['😚', '😗', '😘', '🤩', '😍', '🥰', '😇', '😊', '😉', '🫠'];
    list.forEach((emoji) => lastUsed.add(emoji));
    lastUsed.add('🐻');
    const expectedResult = [
      '🐻',
      '🫠',
      '😉',
      '😊',
      '😇',
      '🥰',
      '😍',
      '🤩',
      '😘',
      '😗',
    ];
    expect(lastUsed.list()).toEqual(expectedResult);
  });
});
