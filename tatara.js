function getPlayers () {
    var players = [
      { name: 'Alice', score: 99 },
      { name: 'Billy', score: 83 },
      { name: 'Cindy', score: 91 },
      { name: 'David', score: 96 },
      { name: 'Emily', score: 88 }
    ]
  
    function randomIndex () {
      return Math.floor(Math.random() * players.length)
    }
  
    var playerNum = 1
    setInterval(function () {
      players.forEach(function (player) {
        player.score += Math.random() * 10
      })
      if (players.length > 3 && Math.random() < 0.05) {
        players.splice(randomIndex(), 1)
      }
      if (Math.random() < 0.05) {
        players.splice(randomIndex(), 0, { 
          name: 'Player ' + playerNum++, 
          score: players[randomIndex()].score 
        })
      }
    }, 200)
    
    return players
  }