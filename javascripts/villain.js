class Villain {

 
  constructor(name) {
    this.name = name
  }

  
  static all = []

  savePlayer(){
    return Player.all.push(this)
  }




  setDiv () {
   return document.getElementById(`${this.name}`)
  }


}