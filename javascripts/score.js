class Score {

static all = []





static setTheScore() {
  let strongParams = {
      score: {
          time: scores[0], 
      }
  }
  fetch(baseUrl + "/scores", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify(strongParams),
      method: "POST"
  })
  .then( function(response) {
      return response.json();
  })
  // .then( function(score) {
  //     scores.push(score)
     
  // })
  resetMain()

  return showPlayerScore();
}


static showAll = () => { 
  fetch(baseUrl + "/scores")
  .then(response => response.json())
  .then(data => data.forEach(data =>  Score.all.push(`${data.player.name} time of ${60 - data.time} seconds`)))
}



}