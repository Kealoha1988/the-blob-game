//variables
let scores = []
let blobCount = 0
const baseUrl = 'http://localhost:3000'


//countdown
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let makeLongList = () => {
  a = []
  for (i = 0; i < 90; i ++){
    a.push(i)
  }
  return a.reverse()
}

let list = makeLongList()

let countdown = async () => {
  for (let num of list) {
    await sleep(1000)
    firstVillain.checkIfBlobDestroyed()
    secondVillain.checkIfBlobDestroyed()
    thirdVillain.checkIfBlobDestroyed()
    fourthVillain.checkIfBlobDestroyed() 
    fifthVillain.checkIfBlobDestroyed()
     timerTag().innerText = num   
  }
  if (timerTag().innerText = "0"){
    timerTag().innerText = "GAME OVER"
    await sleep(2000)
    
    alert("and the internet was no more....")
    
    await sleep(2000)
   resetMain()
  }
}


//html
let nameTemplate = () => {
  return `
  <div class="contianer">
  <p style="color:rgb(12, 220, 206)">There are Blobs taking over the internet!</p>
  <p style="color:rgb(220, 161, 12)">Destroy them by clicking on them untill they disapear.</p>
  <p style="color:rgb(140, 12, 220)">There is only a minute and a half left before it's too late!</p>
  <p style="color:rgb(210, 210, 210)">If you are up to the challange please enter your name...</p>
  <p style="color:rgb(255, 147, 147)"> and good luck!</p>
  </div>
  <br>
  <h3 id="namePlease" class="inits">Your Name</h3>
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
  <form id="playerName" data-id="${currentPlayer().id}">
  <div class="input-field">
    <input type="text" name="initials" id="initials" value="${currentPlayer().name}" />
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


let level3 = () => {
  return `
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px; height: 200px; width 200px"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px; height: 200px; width 200px"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px; height: 200px; width 200px"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level4 = () => {
  return `
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px; height: 200px; width 200px"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px; height: 200px; width 200px"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px; height: 200px; width 200px"></div>
  <div id="theBlob4" class="child-4" style="bottom: 0px; left: 0px; height: 200px; width 200px"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level5 = () => {
  return `

  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px; height: 200px; width 200px"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px; height: 200px; width 200px"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px; height: 200px; width 200px"></div>
  <div id="theBlob4" class="child-4" style="bottom: 0px; left: 0px; height: 200px; width 200px"></div>
  <div id="theBlob5" class="child-5" style="bottom: 200px; left: 200px; height: 200px; width 200px"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `}



  let renderLevel2 = () => {
    level2()   
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()
  }

  let renderLevel3 = () => {
    level3()
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()
    thirdVillain.smiteVillain()
  }

  let renderLevel4 = () => {
    level4()
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()
    thirdVillain.smiteVillain()
    fourthVillain.smiteVillain()
  }

let renderLevel5 = () => {
  level5()
  firstVillain.smiteVillain()
  secondVillain.smiteVillain()
  thirdVillain.smiteVillain()
  fourthVillain.smiteVillain()
  fifthVillain.smiteVillain()
}

let currentLevel = (level) => {
  return gameTag().innerHTML = level
} 


//score methods
let showPlayerScore = () => document.getElementById("main").innerHTML = `<h3 style="color:rgb(12, 220, 206)">time; ${90 - scores[0]} seconds to spare, player: ${currentPlayer().name}</h3>`

function gameScores(){
  scores.push(parseInt(timerTag().innerText))
  Score.setTheScore()
  Player.renderEditForm()
  renderGameFinish(Score.all)
}

let renderGame = () => {
  Score.showAll()
  if (timerTag().innerText === "GAME OVER"){alert("better luck next time!")}
  else if (readBlobsCounter() == "Blobs Destroyed = 0") {currentLevel(level1()) && firstVillain.smiteVillain()}
  else if (readBlobsCounter() == "Blobs Destroyed = 1") {currentLevel(level2()) && renderLevel2()} 
  else if (readBlobsCounter() == "Blobs Destroyed = 3") {currentLevel(level3()) && renderLevel3()}
  
  else if (readBlobsCounter() == "Blobs Destroyed = 6") {currentLevel(level4()) && renderLevel4()}
  else if (readBlobsCounter() == "Blobs Destroyed = 10") {currentLevel(level5()) && renderLevel5()}
  else if (readBlobsCounter() == "Blobs Destroyed = 15") {gameScores()}
  
}



function renderGameFinish(arr){
  
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
    currentPlayer().delete()
    return resetGame()
  })

  playAgainTag().addEventListener("click", function(e){
    e.preventDefault
    return resetGame()
}) 
}

function resetGame(){
    gameText()
    Player.renderNameForm()
}






function finishThis(){
  resetMain()
  showPlayerScore()
  Player.renderEditForm()
  renderGameFinish(Score.all)
}




document.addEventListener("DOMContentLoaded", function () {
  gameText()
  Player.renderNameForm()
});

 

