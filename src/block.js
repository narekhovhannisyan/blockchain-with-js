const crypto = require('crypto')

/**
 * @class Block - Single blockchain node.
 */
class Block {
  constructor (index, data) {
    this.index = index
    this.timestamp = Date.now()
    this.data = data
    this.previousHash = null
    this.hash = this.buildHash()
  }

  /**
   * Builds hash for current node based on `index`, `timestamp`, `previousHash`, `data`.
   * @return {string} - The encrypted hash.
   */
  buildHash () {
    const dataToEncrypt = this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)
    return crypto.createHash('sha256').update(dataToEncrypt).digest('hex')
  }
}
