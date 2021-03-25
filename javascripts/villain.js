class Villain {
  
  static all = []

  constructor(name) {
    this.name = name
    this.setDiv
    // this.smiteVillain
  }

  savePlayer(){
    return Player.all.push(this)
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
   
  if (this.setDiv()?.style.width == "0px") {
    blobsCounter()
    shellDrop.play()
    renderGame()
    setTimeout(() => {this.setDiv().style.width = ""}, 500)
  }
}

}
