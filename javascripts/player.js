class Player {

 
  constructor(name) {
    this.name = name
  }

  
  static all = []

  savePlayer(){
    return Player.all.push(this)
  }



}