//variables
let players = []
let numArray = [1, 2, 3 ,4]
let blobCount = 0

let countDownDate = new Date();

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

//object blob
function Blob(name, height, width){
  this.name = document.getElementById(name)
  this.style.height = height
  this.style.width = width 
}

const theBlob1 = () => document.getElementById("theBlob1")
const theBlob2 = () => document.getElementById("theBlob2")
const theBlob3 = () => document.getElementById("theBlob3")
const theBlob4 = () => document.getElementById("theBlob4")
const theBlob5 = () => document.getElementById("theBlob5")
let blobsCounter = () => blobsKilledTag().innerText = `Blobs Destroyed = ${blobCount += 1}`
let readBlobsCounter = () => blobsKilledTag().innerText
const blobsKilledTag = () => document.getElementById("blobsKilled")

let gameTag = () => document.getElementById("game")

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
    clickBlob1()
    clickBlob2()
  }

  let renderLevel3 = () => {
    level3()
    clickBlob1()
    clickBlob2()
    clickBlob3()
  }

  let renderLevel4 = () => {
    level4()
    clickBlob1()
    clickBlob2()
    clickBlob3()
    clickBlob4()
  }

let renderLevel5 = () => {
  level5()
  clickBlob1()
  clickBlob2()
  clickBlob3()
  clickBlob4()
  clickBlob5()
}


let currentLevel = (level) => {
  return gameTag().innerHTML = level
} 







let renderGame = () => {
if (readBlobsCounter() == "Blobs Destroyed = 0") {currentLevel(level1()) && clickBlob1()}
  else if (readBlobsCounter() == "Blobs Destroyed = 1") {currentLevel(level2()) && renderLevel2()} 
  else if (readBlobsCounter() == "Blobs Destroyed = 3") {currentLevel(level3()) && renderLevel3()}
  else if (readBlobsCounter() == "Blobs Destroyed = 6") {currentLevel(level4()) && renderLevel4()}
  else if (readBlobsCounter() == "Blobs Destroyed = 10") {currentLevel(level5()) && renderLevel5()}
  else if (readBlobsCounter() == "Blobs Destroyed = 15") {alert("You Win!!!")}
 }

 let checkRenderGame = () => {
   let a = parseInt(timerTag().innerText = "0") / 5

   if (!a.toString().includes(".") ) {destroyBlob()}
 }
 
 let destroyBlob = () => {
  
   if (theBlob1().style.width == "0px") {blobsCounter()}
 }

//  let checkIfDestroyed = () => {document.addEventListener("click", destroyBlob())}


// let renderGame = (level = level1()) => {gameTag().innerHTML = level}





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

// let destroyTheBlob = (blob) => {
//   if (blob.style.height || func.style.width == "20px") {return blob.style.height = "" && blob.styl}
// }
function getPlayer() {
  fetch('http://localhost:3000/players')
  .then(resp => resp.json())
  .then(data => data)
  return data
}



// clickBlob1()
// clickBlob2()
// clickBlob3()
// clickBlob4()
// clickBlob4()
// clickBlob5()



  let submitPlayer = (e) => {
    e.preventDefault();
    players.push({
      initials: initialsInput().value,
    });
    resetPlayer()
   return tagText(h1(), "Lets Play The Blob Game!") && countdown() && renderGame()
  }
  
  // document.addEventListener("DOMContentLoaded", function () {
  //   renderGame();
  // });
  

let renderForm = () => {
  resetPlayer();
  playerTag().innerHTML = nameTemplate();
  playerName().addEventListener("submit", submitPlayer);
}

h1().style.color = "grey"
gameText()
renderForm()

// clickBlob()

