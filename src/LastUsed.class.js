const LastUsed = (function () {
  const _maxLength = new WeakMap();
  const _lastUsed = new WeakMap();

  class LastUsed {
    constructor(maxLength = 10) {
      _lastUsed.set(this, []);
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
      return this;
    }
  }

  return LastUsed;
})();

export default LastUsed;
