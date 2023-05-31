import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import EMOJIS from 'unicode-emoji-json/data-by-emoji.json';
import renderEmojis from './renderEmojis';
import LastUsed from './LastUsed.class';
const lastUsed = new LastUsed({ loadCallback: renderLastUsed });

export default function copyToClipboard(target) {
  const selectedEmoji = target.dataset.emoji;
  navigator.clipboard.writeText(selectedEmoji);
  renderLastUsed(lastUsed.add(selectedEmoji));
  Toastify({
    text: `✔️ Emoji ${selectedEmoji} copied to clipboard`,
    duration: 2000,
    close: false,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}

export function renderLastUsed(lastUsed) {
  const lastUsedEmojis = lastUsed.list();

  const emojiAr = lastUsedEmojis.reduce((acc, item) => {
    if (EMOJIS[item]) {
      const emoji = EMOJIS[item];
      emoji.emoji = item;
      return [...acc, emoji];
    }
    return acc;
  }, []);

  renderEmojis(emojiAr, 'div#last-used');
}
