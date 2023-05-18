export default function renderEmojis(emojiAr, targetSelector) {
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
  document.querySelector(targetSelector).innerHTML = html;
}
