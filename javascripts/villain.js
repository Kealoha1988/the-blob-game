class Villain {

 
  constructor(name) {
    this.name = name
    this.setDiv
    // this.smiteVillain
  }

  
  static all = []

  savePlayer(){
    return Player.all.push(this)
  }

  static checkIfDead(){


    if (parseInt(timerTag().innerText) > 60){
      all[i].checkIfBlobDestroyed
    }
  }







  setDiv () {
   return document.getElementById(`${this.name}`)
  }

 

heightPx = () => {
  let villain = this.setDiv()
  
  let a = villain.style.height.split("")
    a.splice(-2, 2)
    let num = parseInt(a.join(""))
    return num
  }

widthPx = () => {
  let villain = this.setDiv()
 
  let a = villain.style.height.split("")
  a.splice(-2, 2)
  let num = parseInt(a.join(""))
  return num
}

lessBlobHeight = () => {
  let villain = this.setDiv()

 
  let newNum = this.heightPx() -20 
  return villain.style.height = "" + newNum + "px" 
}

lessBlobWidth = () => {
  let villain = this.setDiv()

  let newNum = this.widthPx() -20 
  return villain.style.width = "" + newNum + "px" 
}

lessBlob = () => {
  this.lessBlobHeight()
  this.lessBlobWidth()
}


 
 smiteVillain = () => {
   this.setDiv().addEventListener("click", this.lessBlob)
 }
 


checkIfBlobDestroyed = () => {
   
  if (villain.style.width == "0px") {
    villain.style.height = "0px"
    blobsCounter()
    renderGame()
    setTimeout(() => {villain.style.width = ""}, 500)
  }
}

checkIfBlobDestroyed = () => {
   
  if (this.setDiv()?.style.width == "0px") {
    blobsCounter()
    renderGame()
    setTimeout(() => {this.setDiv().style.width = ""}, 500)
  }
}


//  lessBlob = () => {
//    let villain = this.setDiv()

//    villain.lessBlobHeight()
//    villain.lessBlobWidth()
//  }


}
