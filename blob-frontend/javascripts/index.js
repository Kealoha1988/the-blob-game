//variables
let players = []
let scores = []
let numArray = [1, 2, 3 ,4]
let allPlayers = []
let allScores = []
let blobCount = 0
let countDownDate = new Date();
const baseUrl = 'http://localhost:3000'

function Player(name) {
  this.name = name

}

//countdown
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let makeLongList = () => {
  a = []
  for (i = 0; i < 61; i ++){
    a.push(i)
  }
  return a.reverse()
}

let list = makeLongList()

let countdown = async () => {
  for (let item of list) {
    await sleep(1000)
    checkIfBlobDestroyed()
    checkIfBlobDestroyed2()
     timerTag().innerText = item    
  }
  if (timerTag().innerText = "0"){
    return timerTag().innerText = "GAME OVER"
  }
}



//finder fucntions
const h1 = () => document.getElementById("h1")
let tagText = (element, words) => element.innerText = words
let gameText = () => tagText(h1(), "Welcome to Blob Game")
const playerTag = () => document.getElementById("player")
const namePleaseTag = () => document.getElementById("namePlease")
const resetPlayer = () => playerTag().innerHTML = ""
const resetMain = () => mainTag().innerHTML = ""

const initialsInput = () => document.getElementById("initials")
const timerTag = () => document.getElementById("timer")
const main = document.getElementById("main")


const theBlob1 = () => document.getElementById("theBlob1")
const theBlob2 = () => document.getElementById("theBlob2")
const theBlob3 = () => document.getElementById("theBlob3")
const theBlob4 = () => document.getElementById("theBlob4")
const theBlob5 = () => document.getElementById("theBlob5")
let blobsCounter = () => blobsKilledTag().innerText = `Blobs Destroyed = ${blobCount += 1}`
let readBlobsCounter = () => blobsKilledTag().innerText
const blobsKilledTag = () => document.getElementById("blobsKilled")

let gameTag = () => document.getElementById("game")
let mainTag = () => document.getElementById("main")

//html
let nameTemplate = () => {
  return `
  <div class="contianer">
  <p style="color:rgb(12, 220, 206)">There are Blobs taking over the internet!</p>
  <p style="color:rgb(220, 161, 12)">Destroy them by clicking on them untill they disapear.</p>
  <p style="color:rgb(140, 12, 220)">There is only a minute left before it's too late!</p>
  <p style="color:rgb(210, 210, 210)">If you are up to the challange please enter your name...</p>
  <p style="color:rgb(255, 147, 147)"> and good luck!</p>
  </div>
  <br>
  <h3 id="namePlease" class="inits">Your Initials</h3>
  <form id="playerName">
    <div class="input-field">
      <input type="text" name="initials" id="initials" />
    </div>
    <br>
    <input type="submit" value="I'm Ready" />
  </form>
  `;
}

let editForm = () => {
  return `
  <form id="playerName" data-id="${players[0].id}">
  <div class="input-field">
    <input type="text" name="initials" id="initials" value="${players[0].name}" />
  </div>
  <input type="submit" value="change name" />
</form>
`
}


let deleteButton = () => {
  return `
<form id="delete">
<input type="submit" value="delete" />
</form>`
}

let playAgainButton = () => {
  return `<form id="play again">
  <input type="submit" value="play again" />
</form>`
}

let level1 = () => {
  return `
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1" style="top: 0px; left: 0px; height: 200px; width 200px"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level2 = () => {
  return `
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px; height: 200px; width 200px"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px; height: 200px; width 200px"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}




  let renderLevel2 = () => {
    level2() 
    clickBlob1()
    clickBlob2()
  }

let currentLevel = (level) => {
  return gameTag().innerHTML = level
} 

let showScore = () => {
  if (players.length == 1) {document.getElementById("main").innerHTML = `<h3 style="color:rgb(12, 220, 206)">time: ${60 - scores[0]} seconds, player: ${players[0].name}</h3>`}
  else if (players.length == 2){document.getElementById("main").innerHTML = `<h3 style="color:rgb(12, 220, 206)">time: ${60 - scores[0]} seconds, player: ${players[1].name}</h3>`}
}

function workPlease(){
  scores.push(parseInt(timerTag().innerText))
  
  setTheScore()

 showAllScoresAndPlayers(allScores)
}

let renderGame = () => {
  showAll()
  if (readBlobsCounter() == "Blobs Destroyed = 0") {currentLevel(level1()) && clickBlob1()}
  else if (readBlobsCounter() == "Blobs Destroyed = 1") {currentLevel(level2()) && renderLevel2()} 
  else if (readBlobsCounter() == "Blobs Destroyed = 3") {workPlease()}
}

 
 let checkIfBlobDestroyed = () => {
   
   if (theBlob1().style.width == "0px") {
     blobsCounter()
     renderGame()
     setTimeout(() => {theBlob1().style.width = ""}, 500)
   }
 }

 let checkIfBlobDestroyed2 = () => {
  
  if (theBlob2()?.style.width == "0px") {
    blobsCounter()
    renderGame()
    setTimeout(() => {theBlob2().style.width = ""}, 500)
  }
}




//  let checkIfDestroyed = () => {document.addEventListener("click", destroyBlob())}


// let renderGame = (level = level1()) => {gameTag().innerHTML = level}



//less blob1
// let heightPx1 = (blob) => {
//   let b = document.getElementById(blob)
//   let a = b.style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx1 = (blob) => {
//   let b = document.getElementById(blob)

//   let a = b.style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob1Height = (blob) => {
//   const b = document.getElementById(blob)

//   let newNum = heightPx1(b) -20 
//   return b.style.height = "" + newNum + "px" 
// }

// let lessBlob1Width = (blob) => {
//   const b = document.getElementById(blob)

//   let newNum = widthPx1(b) -20 
//   return b.style.width = "" + newNum + "px" 
// }

//  let lessBlob1 = () => lessBlob1Height() && lessBlob1Width()
let heightPx1 = () => {
  let a = theBlob1().style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
}

let widthPx1 = () => {
  let a = theBlob1().style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

let lessBlob1Height = () => {
  let newNum = heightPx1() -20 
  return theBlob1().style.height = "" + newNum + "px" 
}

let lessBlob1Width = () => {
  let newNum = widthPx1() -20 
  return theBlob1().style.width = "" + newNum + "px" 
}

 let lessBlob1 = () => lessBlob1Height() && lessBlob1Width()



 //less blob2
let heightPx2 = () => {
  let a = theBlob2().style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
}

let widthPx2 = () => {
  let a = theBlob2().style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

let lessBlob2Height = () => {
  let newNum = heightPx2() -20 
  return theBlob2().style.height = "" + newNum + "px" 
}

let lessBlob2Width = () => {
  let newNum = widthPx2() -20 
  return theBlob2().style.width = "" + newNum + "px" 
}

 let lessBlob2 = () => lessBlob2Height() && lessBlob2Width()

 function shrinkBlob(blob){
  // const b = document.getElementById(blob)
  heightPx1(blob)
  widthPx1(blob)
  lessBlob1Height(blob)
  lessBlob1Width(blob)
}


// function getPlayer() {
//   fetch(playersURL)
//   .then(response => response.json())
//   .then(data => console.log(data))
// }


async function getPlayer() {
  let response = await fetch(baseUrl + "/players")
  let data = await response.json
  console.log(data)
}

function getScores() {
  fetch(baseUrl + "/scores")
  .then(response => response.json())
  .then(data => console.log(data));

}



function setThePlayer(e) {
  e.preventDefault();
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
      players.push(player)
  })
  resetPlayer()
  return tagText(h1(), "Lets Play The Blob Game!") && countdown() && renderGame();
}



function setTheScore() {
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
  .then( function(score) {
      scores.push(score)
     
  })
  resetMain()

  return showScore();
}


//click blobs
 let clickBlob1 = () => theBlob1().addEventListener("click", lessBlob1)
 let clickBlob2 = () => theBlob2().addEventListener("click", lessBlob2)








  document.addEventListener("DOMContentLoaded", function () {
  gameText()
  renderForm()
});
  

let renderForm = () => {
  resetPlayer();
  playerTag().innerHTML = nameTemplate();
  playerName().addEventListener("submit", setThePlayer);
}

h1().style.color = "grey"
// gameText()
// renderForm()

// clickBlob()

let showAll = () => {
  fetch(baseUrl + "/scores")
  .then(response => response.json())
  .then(data => data.forEach(data =>  allScores.push(`${data.player.name} time of ${60 - data.time} seconds`)))
}



const playAgainTag = () => document.getElementById("play again")
const deleteTag = () => document.getElementById("delete")
const playerName = () => document.getElementById("playerName")


function showAllScoresAndPlayers(arr){
  mainTag().appendChild(document.createElement("div")).innerHTML = editForm()
  mainTag().appendChild(document.createElement("div")).innerHTML = deleteButton()
  mainTag().appendChild(document.createElement("div")).innerHTML = `<h3 style="color:rgb(220, 161, 12">top 10</h3>`

//showing all the scores and players
  for (let i = 0; i < 11; i++){
    mainTag().appendChild(document.createElement("div")).innerHTML = `<h4 style="color:rgb(140, 12, 220)">${arr[i]}</h4>`
  }
  //render play again button
  mainTag().appendChild(document.createElement("div")).innerHTML =  playAgainButton()

  deleteTag().addEventListener("click", function(e){
    e.preventDefault
    alert("sorry to see you go!")
    deletePlayer()
    return resetGame()
  })
  playerName().addEventListener("submit", function(e){
    e.preventDefault
    editPlayer(e)
    resetMain()
    showAll()
    return workPlease()
})
  playAgainTag().addEventListener("click", function(e){
    e.preventDefault
    return resetGame()
}) 
}

function resetGame(){
    gameText()
    renderForm()
}

function deletePlayer(){
  fetch(baseUrl + "/players/" + players[0].id, {
  method: "DELETE"
  })
}



function beCool(){
  deletePlayer()
  resetGame()
}

function finishEdit(){
  editPlayer()
  resetMain()
  showAll()
  return workPlease()
}


 

  function editPlayer(e) {
    e.preventDefault();
    let strongParams = {
        player: {
            name: initialsInput().value, 
        }
    }
    fetch(baseUrl + "/players/" + players[0].id, {
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
    .then( function(player) {
      if (player.name == "has already been taken"){
        alert("sorry that name is taken!")
        setTheScore()
        return showAllScoresAndPlayers(allScores)
      }
      else
        players.push(player)
    })
    resetMain()
    showScore()
    setTheScore
    showAllScoresAndPlayers(allScores)
    return workPlease();
  }