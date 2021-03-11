//variables
let players = []
let numArray = [1, 2, 3 ,4]
let blobCount = 0

let countDownDate = new Date();

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

const playerName = () => document.getElementById("playerName")

const initialsInput = () => document.getElementById("initials")
const timerTag = () => document.getElementById("timer")

const theBlob1 = () => document.getElementById("theBlob1")
const theBlob2 = () => document.getElementById("theBlob2")
const theBlob3 = () => document.getElementById("theBlob3")
const theBlob4 = () => document.getElementById("theBlob4")
const theBlob5 = () => document.getElementById("theBlob5")
let blobsCounter = () => blobsKilledTag().innerText = blobCount++
const blobsKilledTag = () => document.getElementById("blobsKilled")

let gameTag = () => document.getElementById("game")

//html
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
  <h4 id="blobsKilled"></h4>
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1" style="top: 0px; left: 0px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level2 = () => {
  return `
  <h4 id="timer" style="color:red"></h4> 
  <h4 id="blobsKilled"></h4>
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px;"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level3 = () => {
  return `
  <h4 id="timer" style="color:red"></h4> 
  <h4 id="blobsKilled"></h4>
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px;"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px;"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level4 = () => {
  return `
  <h4 id="timer" style="color:red"></h4> 
  <h4 id="blobsKilled"></h4>
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px;"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px;"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px;"></div>
  <div id="theBlob4" class="child-4" style="bottom: 0px; left: 0px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let level5 = () => {
  return `
  <h4 id="timer" style="color:red"></h4> 
  <h4 id="blobsKilled"></h4>
  <div id="game" class="parent">
  <div id="theBlob1" class="child-1"style="top: 0px; left: 0px;"></div>
  <div id="theBlob2" class="child-2" style="bottom: 0px; right: 0px;"></div>
  <div id="theBlob3" class="child-3" style="top: 0px; right: 0px;"></div>
  <div id="theBlob4" class="child-4" style="bottom: 0px; left: 0px;"></div>
  <div id="theBlob5" class="child-5" style="bottom: 200px; left: 200px;"></div>
  <link rel="stylesheet" type="text/css" href="index.css">
  </div>
  `
}

let levels = [level1(), level2(), level3(), level4(), level5()]


let renderGame = () => {
  gameTag().innerHTML = level1()}

// let renderGame = (level = level1()) => {gameTag().innerHTML = level}


// blob array methods
let theBLobsArray = []
let makeBlobsArray = () => {
  theBLobsArray.push(theblob)
}


//less blob1
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

 //less blob3
let heightPx3 = () => {
  let a = theBlob3().style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
}

let widthPx3 = () => {
  let a = theBlob3().style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

let lessBlob3Height = () => {
  let newNum = heightPx3() -20 
  return theBlob3().style.height = "" + newNum + "px" 
}

let lessBlob3Width = () => {
  let newNum = widthPx3() -5 
  return theBlob3().style.width = "" + newNum + "px" 
}

 let lessBlob3 = () => lessBlob3Height() && lessBlob3Width()

 //less blob4
let heightPx4 = () => {
  let a = theBlob4().style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
}

let widthPx4 = () => {
  let a = theBlob4().style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

let lessBlob4Height = () => {
  let newNum = heightPx4() -20 
  return theBlob4().style.height = "" + newNum + "px" 
}

let lessBlob4Width = () => {
  let newNum = widthPx4() -20 
  return theBlob4().style.width = "" + newNum + "px" 
}

 let lessBlob4 = () => lessBlob4Height() && lessBlob4Width()

  //less blob5
let heightPx5 = () => {
  let a = theBlob5().style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
}

let widthPx5 = () => {
  let a = theBlob5().style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

let lessBlob5Height = () => {
  let newNum = heightPx5() -20 
  if (theBlob5().style.height == "20px"){
    return blobsCounter()
  }
  else
  return theBlob5().style.height = "" + newNum + "px" 
}

let lessBlob5Width = () => {
  let newNum = widthPx5() -20 
  return theBlob5().style.width = "" + newNum + "px" 
}

 let lessBlob5 = () => lessBlob5Height() && lessBlob5Width()

//click blobs
 let clickBlob1 = () => theBlob1().addEventListener("click", lessBlob1) 
 let clickBlob2 = () => theBlob2().addEventListener("click", lessBlob2) 
 let clickBlob3 = () => theBlob3().addEventListener("click", lessBlob3) 
 let clickBlob4 = () => theBlob4().addEventListener("click", lessBlob4)
 let clickBlob5 = () => theBlob5().addEventListener("click", lessBlob5)  




//set the size
let blobsHeight = (array) => {
  for (let i = 0; i < array.length; i++){
    return array[i]().style.height = "200px"
  }
}
let blobsWidth = (array) => {
  for (let i = 0; i < array.length; i++){
    return array[i]().style.width = "200px"
  }
}

let blobsSize = (array) => blobsHeight(array) && blobsWidth(array)


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


