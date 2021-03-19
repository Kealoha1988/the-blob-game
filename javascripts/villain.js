class Villain {

 
  constructor(name) {
    this.name = name
    this.setDiv
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

  //  let lessBlob1 = () => lessBlob1Height() && lessBlob1Width()

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

 
  let newNum = heightPx1() -20 
  return villain.style.height = "" + newNum + "px" 
}

lessBlobWidth = () => {
  let villain = this.setDiv()

  let newNum = widthPx1() -20 
  return villain.style.width = "" + newNum + "px" 
}

lessBlob = () => {
  let villain = this.setDiv()

  villain.lessBlobHeight()
  villain.lessBlobWidth()
}

clickBlob = () => {
  let villain = this.setDiv()

  villain.addEventListener("click", function (e){
    e.preventDefault
    villain.lessBlobHeight(e)
    villain.lessBlobWidth(e)
  })
}
 


checkIfBlobDestroyed = () => {
   
  if (villain.style.width == "0px") {
    villain.style.height = "0px"
    blobsCounter()
    renderGame()
    setTimeout(() => {villain.style.width = ""}, 500)
  }
}


//  lessBlob = () => {
//    let villain = this.setDiv()

//    villain.lessBlobHeight()
//    villain.lessBlobWidth()
//  }


}
