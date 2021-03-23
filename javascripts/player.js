class Player {

 
  constructor(name, id) {
    this.name = name
    this.id = id
  }


  static all = []

  save(){
    return Player.all.push(this)
  }


  clearPlayer(){
    return Player.all = []
  }

  static readyPlayerOne = (data) => {
    let currentPlayer = new Player(data.name, data.id)
    currentPlayer.save()
    return currentPlayer
  }




static renderNameForm = () => {
  resetPlayerTag();
  playerTag().innerHTML = nameTemplate();
  playerName().addEventListener("submit", Player.findOrCreatePlayer);
}

static renderEditForm = () => {
  mainTag().appendChild(document.createElement("div")).innerHTML = editForm()
  playerName().addEventListener("submit", function(e){
    e.preventDefault
    currentPlayer().edit(e)
})
}



  static findOrCreatePlayer(e) {
    e.preventDefault();
    if (initialsInput().value == ""){
      initialsInput().value = "Beast Mode!"
    }
    let strongParams = {
        player: {
            name: initialsInput().value, 
        }
    }
    fetch(baseUrl + "/players", {
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
    .then( function(player) {
      // new Player(player.name)
      Player.readyPlayerOne(player)
    })
    resetPlayerTag()
    return tagText(h1(), "Lets Play The Blob Game!") && countdown() && renderGame();
  }
  

  edit(e) {
    e.preventDefault();
    let strongParams = {
        player: {
            name: initialsInput().value, 
        }
    }
    fetch(baseUrl + "/players/" + this.id, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(strongParams),
        method: "PATCH"
    })
    .then( function(response) {
        return response.json();
    })
    .then( function(data) {
      if (data.name == "has already been taken"){
        alert("sorry that name is taken!")
        showPlayerScore()
        renderEditForm()
        return renderGameFinish(allScores)
      }
      else
      Score.all = []
      Score.showAll()
      Player.all = []
      Player.readyPlayerOne(data)
      setTimeout(() => {finishThis()}, 500)
      })
}



   delete(){
    fetch(baseUrl + "/players/" + this.id, {
    method: "DELETE"
    })
  }



}