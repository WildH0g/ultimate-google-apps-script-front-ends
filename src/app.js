import initializeEmojis from './initializeEmojis';
import clickHandler from './clickHandler';
import search from './search';

initializeEmojis();

document.addEventListener('click', clickHandler);

document.querySelector('input#search-bar').addEventListener('keyup', search);