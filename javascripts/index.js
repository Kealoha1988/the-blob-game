let players = []

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
     timerTag().innerText = item    
  }
  if (timerTag().innerText = "0"){
    return timerTag().innerText = "GAME OVER"
  }
}


const h1 = () => document.getElementById("h1")

let tagText = (element, words) => element.innerText = words

let gameText = () => tagText(h1(), "Welcome to Blob Game")

const playerTag = () => document.getElementById("player")

const namePleaseTag = () => document.getElementById("namePlease")

const resetPlayer = () => playerTag().innerHTML = ""

const playerName = () => document.getElementById("playerName")

const initialsInput = () => document.getElementById("initials")

const theBlob1 = () => document.getElementById("theBlob1")

let gameTag = () => document.getElementById("game")

let nameTemplate = () => {
  return `
  <h3 id="namePlease" class="inits">Your Initials</h3>
  <form id="playerName">
    <div class="input-field">
      <input type="text" name="initials" id="initials" />
    </div>
    <br>
    <input type="submit" value="set name" />
  </form>
  `;
}

let level1 = () => {
  return `
  <h4 id="timer" style="color:red"></h4> 
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1" style="top: 0px; left: 0px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}



let renderGame = () => {gameTag().innerHTML = level1()}

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




let submitPlayer = (e) => {
  e.preventDefault();
  players.push({
    initials: initialsInput().value,
  });
  resetPlayer()
 return tagText(h1(), "Lets Play The Blob Game!") && renderGame()
}




let renderForm = () => {
  resetPlayer();
  playerTag().innerHTML = nameTemplate();
  playerName().addEventListener("submit", submitPlayer);
}

h1().style.color = "grey"
gameText()
renderForm()