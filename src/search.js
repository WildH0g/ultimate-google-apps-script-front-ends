import EMOJI from 'unicode-emoji-json/data-by-group.json';
import initializeEmojis from './initializeEmojis';
import renderEmojis from './renderEmojis';

const emojis = Object.entries(EMOJI)
  .reduce((ar, [groupName, data]) => {
    const proecessedData = data.map((row) => {
      row.groupName = groupName;
      return row;
    });
    return [...ar, proecessedData];
  }, [])
  .flat();

export default function search(e) {
  const { target } = e;
  const { value } = target;
  if ('' === value.trim()) return initializeEmojis();
  const re = new RegExp(value, 'i');
  const searchResult = emojis.filter((emoji) => re.test(emoji.name));

  renderEmojis(searchResult, 'div#emojis');
}
