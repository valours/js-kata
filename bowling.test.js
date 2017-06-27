const assert = require('assert');
const bowling = require('./market');

describe('market', () => {
  it('Should return 0 for the calculation of an empty score', () => {
    assert.equal(bowling.calculateScoreBowling(''),0)
  })

  it('Should return score for frame', () => {
    assert.deepEqual(bowling.formatFrame(''),{firstScore: 0, secondScore: 0, type: 'hole'})
  })

  it('Should return score for frame', () => {
    assert.deepEqual(bowling.formatFrame('X'),{firstScore: 10, secondScore: 0, type: 'strike'})
  })

  it('Should return score for frame', () => {
    assert.deepEqual(bowling.formatFrame('9/'),{firstScore: 9, secondScore: 1, type: 'spare'})
  })
})
