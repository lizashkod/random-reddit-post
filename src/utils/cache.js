const CACHE_TIMEOUT = 1000 * 60 * 2

class Cache {
  timeout = CACHE_TIMEOUT
  storage = {}

  get now() {
    return (new Date()).getTime()
  }

  set(key, value) {
    this._clean()

    this.storage = {
      ...this.storage,
      [key]: {
        value,
        ttl: this.now + this.timeout,
      }
    }
  }

  get(key) {
    return this.storage[key].value
  }

  isValid(key) {
    const cacheValue = this.storage[key]?.ttl

    return cacheValue > this.now
  }

  _clean() {
    const cleanedStorage = Object.keys(this.storage)
      .reduce((acc, key) => {
        const cacheValue = this.storage[key]
        return this.isValid(key) ? { ...acc, [key]: cacheValue } : acc
      }, {})

    this.storage = cleanedStorage
  }
}

export default new Cache()
