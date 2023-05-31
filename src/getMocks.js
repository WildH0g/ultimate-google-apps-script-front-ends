import isJest from './isJest';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, isJest() ? 0 : ms));
}

export default function getMocks(resolve) {
  return {
    saveEmojis() {
      resolve('💾 Saved emojis: ' + Array.from(arguments).toString());
    },
    async getSavedEmojis() {
      await sleep(3000);
      resolve(
        JSON.stringify([
          '🏁',
          '🏧',
          '👓',
          '🎃',
          '🌍',
          '🍇',
          '🐵',
          '👋',
          '😶',
          '🫣',
        ])
      );
    },
  };
}
