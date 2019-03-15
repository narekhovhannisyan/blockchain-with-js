const Block = require('./block')

/**
 * Build chain using `Block`s.
 * @class Blockchain
 */
class Blockchain {
  constructor () {
    this.chain = []
  }

  /**
   * Checks if `chain` is empty, then assigns `null` to `lastBlockHash`, otherwise get latest blocks hash.
   *  Adds new block to the blockchain.
   * @param {Object} value - The value of the new block.
   * @return {Blockchain}
   */
  addBlock (value) {
    const lastBlockHash = this.chain.length > 0 ? this.getLatestBlock().hash : null
    const newBlock = new Block(this.chain.length, value, lastBlockHash)
    this.chain.push(newBlock)

    return this
  }

  /**
   * Gets the latest block of blockchain.
   * @return {Block}
   */
  getLatestBlock () {
    const latestBlockIndex = this.chain.length - 1
    return this.chain[latestBlockIndex]
  }

  /**
   * Prints whole blockchain.
   */
  print () {
    console.log(this.chain)
  }
}

module.exports = new Blockchain()
