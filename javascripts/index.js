//variables
let players = []
let scores = []
let numArray = [1, 2, 3 ,4]
let allPlayers = []
let allScores = []
let blobCount = 0
let countDownDate = new Date();
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
    forthVillain.checkIfBlobDestroyed() 
    fifthVillain.checkIfBlobDestroyed()
     timerTag().innerText = num   
  }
  // if (timerTag().innerText = "0"){
  //   timerTag().innerText = "GAME OVER"
  //   await sleep(2000)
    
  //   alert("and the internet was no more....")
    
  //   await sleep(2000)
  //  resetMain()
  // }
}




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
    // clickBlob1()
    // clickBlob2()
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()

  }

  let renderLevel3 = () => {
    level3()
    // clickBlob1()
    // clickBlob2()
    // clickBlob3()
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()
    thirdVillain.smiteVillain()
  }
  let renderLevel4 = () => {
    level4()
    // clickBlob1()
    // clickBlob2()
    // clickBlob3()
    // clickBlob4()
    firstVillain.smiteVillain()
    secondVillain.smiteVillain()
    thirdVillain.smiteVillain()
    forthVillain.smiteVillain()
  }
let renderLevel5 = () => {
  level5()
  // clickBlob1()
  // clickBlob2()
  // clickBlob3()
  // clickBlob4()
  // clickBlob5()
  firstVillain.smiteVillain()
  secondVillain.smiteVillain()
  thirdVillain.smiteVillain()
  forthVillain.smiteVillain()
  fifthVillain.smiteVillain()
}




let currentLevel = (level) => {
  return gameTag().innerHTML = level
} 

let showPlayerScore = () => document.getElementById("main").innerHTML = `<h3 style="color:rgb(12, 220, 206)">time: ${60 - scores[0]} seconds, player: ${players[0].name}</h3>`


function gameScores(){
  scores.push(parseInt(timerTag().innerText))
  setTheScore()
  renderEditForm()
  renderGameFinish(allScores)
}


let renderGame = () => {
  showAll()
  if (timerTag().innerText === "GAME OVER"){alert("better luck next time!")}
  else if (readBlobsCounter() == "Blobs Destroyed = 0") {currentLevel(level1()) && firstVillain.smiteVillain()}
  else if (readBlobsCounter() == "Blobs Destroyed = 1") {currentLevel(level2()) && renderLevel2()} 
  else if (readBlobsCounter() == "Blobs Destroyed = 3") {currentLevel(level3()) && renderLevel3()}
  
  else if (readBlobsCounter() == "Blobs Destroyed = 6") {currentLevel(level4()) && renderLevel4()}
  else if (readBlobsCounter() == "Blobs Destroyed = 10") {currentLevel(level5()) && renderLevel5()}
  else if (readBlobsCounter() == "Blobs Destroyed = 15") {gameScores()}
  
}



//  let checkIfBlobDestroyed = () => {
   
//    if (theBlob1().style.width == "0px") {
//      blobsCounter()
//      renderGame()
//      setTimeout(() => {theBlob1().style.width = ""}, 500)
//    }
//  }

//  let checkIfBlobDestroyed2 = () => {
  
//   if (theBlob2()?.style.width == "0px") {
//     blobsCounter()
//     renderGame()
//     setTimeout(() => {theBlob2().style.width = ""}, 500)
//   }
// }


// let checkIfBlobDestroyed3 = () => {
  
//   if (theBlob3()?.style.width == "0px") {
//     blobsCounter()
//     renderGame()
//     setTimeout(() => {theBlob3().style.width = ""}, 500)
//   }
// }
// let checkIfBlobDestroyed4 = () => {
 
//  if (theBlob4()?.style.width == "0px") {
//    blobsCounter()
//    renderGame()
//    setTimeout(() => {theBlob4().style.width = ""}, 500)
//  }
// }
// let checkIfBlobDestroyed5 = () => {
 
//   if (theBlob5()?.style.width == "0px") {
//     blobsCounter()
//     renderGame()
//     setTimeout(() => {theBlob5().style.width = ""}, 500)
//   }
//  }








// //  let lessBlob1 = () => lessBlob1Height() && lessBlob1Width()
// let heightPx1 = () => {
//   let a = theBlob1().style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx1 = () => {
//   let a = theBlob1().style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob1Height = () => {
//   let newNum = heightPx1() -20 
//   return theBlob1().style.height = "" + newNum + "px" 
// }

// let lessBlob1Width = () => {
//   let newNum = widthPx1() -20 
//   return theBlob1().style.width = "" + newNum + "px" 
// }

//  let lessBlob1 = () => lessBlob1Height() && lessBlob1Width()



//  //less blob2
// let heightPx2 = () => {
//   let a = theBlob2().style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx2 = () => {
//   let a = theBlob2().style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob2Height = () => {
//   let newNum = heightPx2() -20 
//   return theBlob2().style.height = "" + newNum + "px" 
// }

// let lessBlob2Width = () => {
//   let newNum = widthPx2() -20 
//   return theBlob2().style.width = "" + newNum + "px" 
// }

//  let lessBlob2 = () => lessBlob2Height() && lessBlob2Width()

//  //less blob3
// let heightPx3 = () => {
//   let a = theBlob3().style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx3 = () => {
//   let a = theBlob3().style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob3Height = () => {
//   let newNum = heightPx3() -20 
//   return theBlob3().style.height = "" + newNum + "px" 
// }

// let lessBlob3Width = () => {
//   let newNum = widthPx3() -20 
//   return theBlob3().style.width = "" + newNum + "px" 
// }

//  let lessBlob3 = () => lessBlob3Height() && lessBlob3Width()

//  //less blob4
// let heightPx4 = () => {
//   let a = theBlob4().style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx4 = () => {
//   let a = theBlob4().style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob4Height = () => {
//   let newNum = heightPx4() -20 
//   return theBlob4().style.height = "" + newNum + "px" 
// }

// let lessBlob4Width = () => {
//   let newNum = widthPx4() -20 
//   return theBlob4().style.width = "" + newNum + "px" 
// }

//  let lessBlob4 = () => lessBlob4Height() && lessBlob4Width()

//   //less blob5
// let heightPx5 = () => {
//   let a = theBlob5().style.height.split("")
//     a.splice(-2, 2)
//     let num = parseInt(a.join(""))
//     return num
// }

// let widthPx5 = () => {
//   let a = theBlob5().style.height.split("")
//   a.splice(-2, 2)
//   let num = parseInt(a.join(""))
//   return num
// }

// let lessBlob5Height = () => {
//   let newNum = heightPx5() -20 
//   if (theBlob5().style.height == "20px"){
//     return blobsCounter()
//   }
//   else
//   return theBlob5().style.height = "" + newNum + "px" 
// }

// let lessBlob5Width = () => {
//   let newNum = widthPx5() -20 
//   return theBlob5().style.width = "" + newNum + "px" 
// }

//  let lessBlob5 = () => lessBlob5Height() && lessBlob5Width()









function setThePlayer(e) {
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

  return showPlayerScore();
}


//click blobs
 let clickBlob1 = () => theBlob1().addEventListener("click", lessBlob1)
 let clickBlob2 = () => theBlob2().addEventListener("click", lessBlob2)
 let clickBlob3 = () => theBlob3().addEventListener("click", lessBlob3)
 let clickBlob4 = () => theBlob4().addEventListener("click", lessBlob4)
 let clickBlob5 = () => theBlob5().addEventListener("click", lessBlob5)








  document.addEventListener("DOMContentLoaded", function () {
  gameText()
  renderNameForm()
});
  

let renderNameForm = () => {
  resetPlayer();
  playerTag().innerHTML = nameTemplate();
  playerName().addEventListener("submit", setThePlayer);
}





let showAll = () => { 
  fetch(baseUrl + "/scores")
  .then(response => response.json())
  .then(data => data.forEach(data =>  allScores.push(`${data.player.name} time of ${60 - data.time} seconds`)))
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
    deletePlayer()
    return resetGame()
  })

  playAgainTag().addEventListener("click", function(e){
    e.preventDefault
    return resetGame()
}) 
}

function resetGame(){
    gameText()
    renderNameForm()
}

function deletePlayer(){
  fetch(baseUrl + "/players/" + players[0].id, {
  method: "DELETE"
  })
}


let renderEditForm = () => {
  mainTag().appendChild(document.createElement("div")).innerHTML = editForm()
  playerName().addEventListener("submit", function(e){
    e.preventDefault
    editPlayer(e)

})

}


function finishThis(){
  resetMain()
  showPlayerScore()
  renderEditForm()
  renderGameFinish(allScores)
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
        showPlayerScore()
        renderEditForm()
        return renderGameFinish(allScores)
      }
      else
      allScores = []
      showAll()
      players = []
      players.push(player)
      setTimeout(() => {finishThis()}, 500)
      })
}

