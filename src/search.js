import EMOJI from 'unicode-emoji-json/data-by-group.json';
import initializeEmojis from './initializeEmojis';

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

  showEmojis(searchResult);
}

function showEmojis(emojiAr) {
  const html =
    '<div class="emoji-row">' +
    (emojiAr
      .map(
        (emojiObj, i) => /* html */ `
  <span class="m-[8px] cursor-pointer display hover:rotate-[405deg] hover:scale-150 transition-all duration-500 inline-grid emoji" 
    title="${emojiObj.name}" 
    data-emoji="${emojiObj.emoji}" 
    data-emoji-name="${emojiObj.name}"
  >${emojiObj.emoji}</span>${0 === (i + 1) % 5 ? '<br />' : ''}`
      )
      .join('') +
      '</div>');
  document.querySelector('div#emojis').innerHTML = html;
}
