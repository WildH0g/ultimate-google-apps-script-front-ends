import EMOJI from 'unicode-emoji-json/data-by-group.json';

export default function initializeEmojis() {
  const html = Object.entries(EMOJI)
    .map(([category, emojiAr]) => {
      return (
        /* html */ `<p class="subtitle" id="${category
          .replace(/ /g, '_')
          .replace(/&/g, '+')}">${category}</p><div class="emoji-row">` +
        emojiAr
          .map(
            (emojiObj, i) => /* html */ `
          <span class="emoji" 
            title="${emojiObj.name}" 
            data-emoji="${emojiObj.emoji}" 
            data-emoji-name="${emojiObj.name}"
          >${emojiObj.emoji}</span>${0 === (i + 1) % 5 ? '<br />' : ''}`
          )
          .join('') +
        '</div>'
      );
    })
    .join('');

  document.querySelector('div#emojis').innerHTML = html;
}
