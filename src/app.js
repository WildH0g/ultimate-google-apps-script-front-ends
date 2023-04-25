import EMOJI from 'unicode-emoji-json/data-by-group.json';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css'
console.log('🚀 ~ file: app.js:2 ~ emoji:', EMOJI);

const html = Object.entries(EMOJI)
  .map(([category, emojiAr]) => {
    return (
      /* html */ `<p class="subtitle" id="${category.replace(/ /g, '_').replace(/&/g, '+')}">${category}<p><center>` +
      emojiAr
        .map(
          (emojiObj, i) => /* html */ `
          <span class="emoji" 
            title="${emojiObj.name}" 
            data-emoji="${emojiObj.emoji}" 
            data-emoji-name="${emojiObj.name}"
          >${emojiObj.emoji}</span>${0 === (i + 1) % 7 ? '<br />' : ''}`
        )
        .join('') +
      '</center>'
    );
  })
  .join('');

document.querySelector('div#emojis').innerHTML = html;

document.addEventListener('click', e => {
  const { target } = e;
  const classList = [...target.classList];
  const clickRouter = {
    emoji: copyToClipboard,
    category: scrollTo,
  }
  if (classList.includes('emoji')) return clickRouter.emoji.call(this, target);
  if (classList.includes('category')) return clickRouter.category.call(this, target);

});


function copyToClipboard(target) {
  const selectedEmoji = target.dataset.emoji;
  navigator.clipboard.writeText(selectedEmoji);
  Toastify({
    text: `✔️ Emoji ${selectedEmoji} copied to clipboard`,
    duration: 2000,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function scrollTo(target) {
  const el = document.getElementById(target.dataset.category);
  if(null === el) return;
  el.scrollIntoView();
}