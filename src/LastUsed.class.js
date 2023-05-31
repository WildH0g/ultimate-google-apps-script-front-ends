import runGas from './runGas';
import debounce from './debounce';
const LastUsed = (function () {
  const _maxLength = new WeakMap();
  const _lastUsed = new WeakMap();

  async function _persist(emojiList) {
    try {
      await runGas('saveEmojis', emojiList);
    } catch (err) {
      console.error('Could not save emojis:', err);
    }
  }

  const _debouncedPersist = debounce(_persist, 3000);

  async function _load() {
    try {
      const result = await runGas('getSavedEmojis');
      return Array.isArray(result) ? result : JSON.parse(result);
    } catch (error) {
      console.error('Could not load emojis:', error);
    }
  }
  class LastUsed {
    constructor({ loadCallback = null, maxLength = 10 }) {
      _lastUsed.set(this, []);
      _load().then((emojis) => {
        _lastUsed.set(this, emojis || []);
        if ('function' === typeof loadCallback) loadCallback(this);
      });
      _maxLength.set(this, maxLength);
    }

    list() {
      return _lastUsed.get(this);
    }

    add(emoji) {
      const emojis = this.list();
      const index = emojis.findIndex((item) => item === emoji);
      if (-1 !== index) emojis.splice(index, 1);
      emojis.unshift(emoji);
      if (emojis.length > _maxLength.get(this))
        emojis.length = _maxLength.get(this);
      _debouncedPersist(emojis);
      return this;
    }
  }

  return LastUsed;
})();

export default LastUsed;
