/*Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land()

● If a plane lands, its isFlying property is set to false.
● If a plane takes off, its isFlying property is set to true.*/

const airplane = {
  
  _isFlying: null,
  
  init(arg){
    this.name = arg;
  },
  
  lands(){
    this._isFlying = false;
  },

  takesOff(){
    this._isFlying = true;
  },
  
};

airplane.init('Hamo');