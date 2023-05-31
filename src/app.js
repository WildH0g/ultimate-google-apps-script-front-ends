import initializeEmojis from './initializeEmojis';
import clickHandler from './clickHandler';
import search from './search';
window.initializeEmojis = initializeEmojis;
initializeEmojis();
document.addEventListener('click', clickHandler);
document.querySelector('input#search-bar').addEventListener('keyup', search);

console.log(`[35m╔═╗[39m [35m╔╦╗[39m [35m╔═╗[39m [35m ╦[39m [35m╦[39m [35m╔╗ [39m [35m╔═╗[39m [35m╦═╗[39m
[33m║╣ [39m [33m║║║[39m [33m║ ║[39m [33m ║[39m [33m║[39m [33m╠╩╗[39m [33m╠═╣[39m [33m╠╦╝[39m
[32m╚═╝[39m [32m╩ ╩[39m [32m╚═╝[39m [32m╚╝[39m [32m╩[39m [32m╚═╝[39m [32m╩ ╩[39m [32m╩╚═[39m`);
