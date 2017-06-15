exports.tennis = function () {
  this.score = (winners) => {

    let winnersArray = winners.split('')

    let nbWinsPlayer1 = winnersArray.filter(w => w === '1').length
    let nbWinsPlayer2 = winnersArray.filter(w => w === '2').length

    return this.scoreLabel(nbWinsPlayer1, nbWinsPlayer2)
  }

  this.scoreLabel = (p1Wins, p2Wins) => {

    if (p1Wins == 3 && p2Wins == 3 || p1Wins + p2Wins >= 8) {
      return 'DEUCE'
    }else  if (p1Wins <= 3 && p2Wins <= 3 ) {
      return this.pointLabel(p1Wins) + '-' + this.pointLabel(p2Wins)
    }else if (p1Wins == 4 && p2Wins == 3) {
      return this.pointLabel(p1Wins) + '-' + this.pointLabel(p2Wins)
    }else if (p1Wins == 3 && p2Wins == 4) {
      return this.pointLabel(p1Wins) + '-' + this.pointLabel(p2Wins)
    }else if (p1Wins == 4) {
      return 'Player 1 wins'
    }else if (p2Wins == 4) {
      return 'Player 2 wins'
    }
    return ''
  }

  this.pointLabel = (nbWins) => {
    switch (nbWins) {
      case 0: return '0'
      case 1: return '15'
      case 2: return '30'
      case 3: return '40'
      case 4: return 'A'
      default: return 'CONNARD!!1'
    }
  }
};
