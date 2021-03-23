
//finder fucntions
const h1 = () => document.getElementById("h1")
let tagText = (element, words) => element.innerText = words
let gameText = () => tagText(h1(), "Welcome to Blob Game")
const playerTag = () => document.getElementById("player")
const namePleaseTag = () => document.getElementById("namePlease")
const resetPlayerTag = () => playerTag().innerHTML = ""
const resetMain = () => mainTag().innerHTML = ""

const initialsInput = () => document.getElementById("initials")
const timerTag = () => document.getElementById("timer")
const main = document.getElementById("main")



let blobsCounter = () => blobsKilledTag().innerText = `Blobs Destroyed = ${blobCount += 1}`
let readBlobsCounter = () => blobsKilledTag().innerText
const blobsKilledTag = () => document.getElementById("blobsKilled")

let gameTag = () => document.getElementById("game")
let mainTag = () => document.getElementById("main")

const playAgainTag = () => document.getElementById("play again")
const deleteTag = () => document.getElementById("delete")
const playerName = () => document.getElementById("playerName")

const currentPlayer = () => {
  if (Player.all[0]){
    return Player.all[0]
  }
}



const firstVillain = new Villain("theBlob1")
const secondVillain = new Villain("theBlob2")
const thirdVillain = new Villain("theBlob3")
const fourthVillain = new Villain("theBlob4")
const fifthVillain = new Villain("theBlob5")




h1().style.color = "grey"