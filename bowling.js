// @flow

module.exports = {
  calculateScoreBowling: (globalScore) => {
    return 0
  },

  formatFrame: (unitScore) => {
    var emptyScore = { firstScore: 0, secondScore: 0, type: 'hole'}
    var unitScoreSplited = unitScore.split(' ')
    if(unitScoreSplited.length == 1 ) {
      if(unitScore.splited[1]){
        return emptyScore
      }
    }
    return Object.assign({},{})
  }
};
