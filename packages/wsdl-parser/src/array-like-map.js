class ArrayLikeMap extends Map {
  filter(...args) {
    return this.toArray().filter(...args);
  }

  map(...args) {
    return this.toArray().map(...args);
  }

  reduce(...args) {
    return this.toArray().reduce(...args);
  }

  toArray() {
    return Array.from(this).map(([, field]) => field);
  }
}

module.exports = ArrayLikeMap;
