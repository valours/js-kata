const assert = require('assert');
const Greed = require('./greed');

describe('greed', () => {
  var gr = new Greed.greed()

  it('Should return 100 for 1', () => {
    let actual = gr.calculateScore('1')
    assert.equal(actual, 100)
  })

  it('Should return 100 for 11', () => {
    let actual = gr.calculateScore('11')
    assert.equal(actual, 0)
  })

  it('Should return 100 for 122', () => {
    let actual = gr.calculateScore('111')
    assert.equal(actual, 1000)
  })

  it('Should return 50 for 5', () => {
    let actual = gr.calculateScore('115')
    assert.equal(actual, 50)
  })

  it('Should return 50 for 5', () => {
    let actual = gr.calculateScore('115')
    assert.equal(actual, 50)
  })
})
