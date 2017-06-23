const assert = require('assert');
const Greed = require('./greed');

describe('greed', () => {
  var gr = new Greed.greed()

  it('Should return 100 for 1-1', () => {
    let actual = gr.calculateScore(1,1)
    assert.equal(actual, 100)
  })

  it('Should return 50 for 1-5', () => {
    let actual = gr.calculateScore(1,5)
    assert.equal(actual, 50)
  })
})
