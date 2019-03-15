const crypto = require('crypto')

/**
 * @class Block - Single blockchain node.
 */
class Block {
  constructor (index, data, previousHash) {
    this.index = index
    this.timestamp = Date.now()
    this.data = data
    this.previousHash = this.checkPreviousHash(previousHash)
    this.hash = this.calculateHash()
  }

  /**
   * Builds hash for current node based on `index`, `timestamp`, `previousHash`, `data`.
   * @return {string} - The encrypted hash.
   */
  calculateHash () {
    const dataToEncrypt = this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)
    return crypto.createHash('sha256').update(dataToEncrypt).digest('hex')
  }

  /**
   * In case if there is no `previousHash`, throws error.
   *  Otherwise returns given `previousHash`.
   * @param {string|null} previousHash
   * @return {string|null}
   * @throws Error
   */
  checkPreviousHash (previousHash) {
    if (this.index !== 0 && !previousHash) {
      throw new Error('Previous hash is missing.')
    }

    return previousHash
  }
}

module.exports = Block
