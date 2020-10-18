const CACHE_TIMEOUT = 1000 * 60 * 2

class Cache {
  storage = {}

  set(key, value) {
    this._clean()

    this.storage = {
      ...this.storage,
      [key]: {
        value,
        ttl: this._now + CACHE_TIMEOUT,
      }
    }
  }

  get(key) {
    return this._isValid(key) ? this.storage[key].value : null
  }

  get _now() {
    return (new Date()).getTime()
  }

  _isValid(key) {
    const cacheValue = this.storage[key]?.ttl

    return cacheValue > this._now
  }

  _clean() {
    const cleanedStorage = Object.keys(this.storage)
      .reduce((acc, key) => {
        const cacheValue = this.storage[key]
        return this._isValid(key) ? { ...acc, [key]: cacheValue } : acc
      }, {})

    this.storage = cleanedStorage
  }
}

export default new Cache()
