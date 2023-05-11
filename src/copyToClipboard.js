import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function copyToClipboard(target) {
  const selectedEmoji = target.dataset.emoji;
  navigator.clipboard.writeText(selectedEmoji);
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
