import EMOJI from 'unicode-emoji-json/data-by-group.json';

export default function initializeEmojis() {
  const html = Object.entries(EMOJI)
    .map(([category, emojiAr]) => {
      return (
        /* html */ `<p class="text-gray-600 uppercase text-xs font-bold tracking-widest m-[8px]" id="${category
          .replace(/ /g, '_')
          .replace(/&/g, '+')}">${category}</p><div class="emoji-row">` +
        emojiAr
          .map(
            (emojiObj, i) => /* html */ `
          <span class="m-[8px] cursor-pointer display hover:rotate-[405deg] hover:scale-150 transition-all duration-500 inline-grid emoji" 
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
