const assert = require('assert');
const RG = require('./tennis');

describe('tennis', () => {
  var tennis = new RG.tennis()

  it('Should return 0-0 for initial score', () => {
    let actual = tennis.score('')
    assert.equal(actual, "0-0")
  })

  describe('When only player one wins', () => {
    it('Should return 15-0 if player one wins once',() => {
      let actual = tennis.score('1')
      assert.equal(actual,"15-0")
    })

    it('Should return 30-0 if player one wins twice',() => {
      let actual = tennis.score('11')
      assert.equal(actual,"30-0")
    })

    it('Should return 40-0 if player one wins 3 times',() => {
      let actual = tennis.score('111')
      assert.equal(actual,"40-0")
    })
  })

  describe('When only player two wins', () => {
    it('Should return 0-15 if player one wins once',() => {
      let actual = tennis.score('2')
      assert.equal(actual,"0-15")
    })

    it('Should return 0-30 if player one wins twice',() => {
      let actual = tennis.score('22')
      assert.equal(actual,"0-30")
    })

    it('Should return 0-40 if player one wins 3 times',() => {
      let actual = tennis.score('222')
      assert.equal(actual,"0-40")
    })
  })

  describe('When one player wins',() => {
    it('Should return Player 1 wins if player one wins 4 times',() => {
      let actual = tennis.score('1111')
      assert.equal(actual,"Player 1 wins")
    })

    it('Should return Player 2 wins if player two wins 4 times',() => {
      let actual = tennis.score('2222')
      assert.equal(actual,"Player 2 wins")
    })

    it('Should return 15-15 wins if two players wins once',() => {
      let actual = tennis.score('12')
      assert.equal(actual,"15-15")
    })
  })

  describe('When players wins same number game', ()=> {
    it('Should return 15-15 wins if two players wins twice',() => {
      let actual = tennis.score('12')
      assert.equal(actual,"15-15")
    })

    it('Should return 30-30 wins if two players wins twice',() => {
      let actual = tennis.score('1122')
      assert.equal(actual,"30-30")
    })

    it('Should return DEUCE wins if two players wins 3 times',() => {
      let actual = tennis.score('111222')
      assert.equal(actual,"DEUCE")
    })
  })

  describe('When players fight for the final points', ()=> {
    it('Should return A-40 wins if player one wins 4 times and player two wins 3 times',() => {
      let actual = tennis.score('1112221')
      assert.equal(actual,"A-40")
    })

    it('Should return 40-A wins if one player wins 3 times and player two wins 4 times',() => {
      let actual = tennis.score('1112222')
      assert.equal(actual,"40-A")
    })

    it('Should return DEUCE wins if two players wins 4 times',() => {
      let actual = tennis.score('11122212')
      assert.equal(actual,"DEUCE")
    })

    it('Should return DEUCE wins if two players wins 5 times',() => {
      let actual = tennis.score('1112221212')
      assert.equal(actual,"DEUCE")
    })
  })

})
