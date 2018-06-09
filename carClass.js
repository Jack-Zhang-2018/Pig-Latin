// PROBLEM STATEMENT

// Story: As a programmer, I can call upon a car to tell me all it's information.

// Hint: Implement carInfo method on one or more classes. You can call a super class's carInfo with super.

// Story: As a programmer, I can sort my collection of cars based on model and then year.


class Car {
  constructor(mdl) {
    this.wheels = 4
    this.lights = false
    this.signal = "OFF"
    this.model = mdl
    this.speed = 0
  }
    switchLights(){
      this.lights = !this.lights
      // if (this.lights === "OFF"){
      //   this.lights = "ON"
      //   return this.lights
      // } else {
      //   this.lights = "OFF"
      //   return this.lights
      // }
    }

    signalLeft(){
      this.signal = "LEFT"
    }

    signalRight(){
      this.signal = "RIGHT"
    }

    signalOff(){
      this.signal = "OFF"
    }

    carInfo(){

    }

}


class Tesla extends Car {
   constructor(mdl){
     super(mdl)
  }

    acceleration(){
      this.speed += 10
    }

    brake(){
      if (this.speed >= 7) {
        this.speed -= 7
      }
    }

}


// Story: As a programmer, I can speed my Tatas up by 2 per acceleration.

class Tatas extends Car {
   constructor(mdl){
     super(mdl)
  }

    acceleration(){
      this.speed += 2
    }

    brake(){
      if (this.speed >= 1.25) {
        this.speed -= 1.25
      }
    }

}

class Toyotas extends Car {
   constructor(mdl){
     super(mdl)
  }

    acceleration(){
      this.speed += 7
    }

    brake(){
      if (this.speed >= 5) {
        this.speed -= 5
      }
    }

}

//////////////////////////////////////////////////////////////////////////

let teslaOne = new Tesla("2013")
let teslaTwo = new Tesla("1993")
let tatasOne = new Tatas("2015")
let tatasTwo = new Tatas("2020")
let toyotasOne = new Toyotas("2017")
let toyotasTwo = new Toyotas("2001")

let carray = [toyotasOne, teslaTwo, tatasOne, teslaOne,toyotasTwo, tatasTwo]

// let old_arr = []
// let new_arr = []
//
// function sortByYear(year){
//   carray.map(function(car){
//
//     if (parseInt(car.model) >= year) {
//       new_arr.push(car)
//     } else {
//       old_arr.push(car)
//     }
//   })
//   console.log( [old_arr, new_arr] )
// }
// sortByYear(2015)

///////////////////////////////////////////////////////////////////////////////

// function sortClass() {
// carray.map(function(car){
//   if (car.constructor.name === "Tesla"){
//     tesla_Array.push(car)
//   } else if (car.constructor.name === "Tatas"){
//     tata_Array.push(car)
//   } else {
//     toyota_Array.push(car)
//   }
// })
//
// let sortedArray = tesla_Array.concat(tata_Array,toyota_Array)
// return sortedArray
// }


////////////////////////////////////////////////////////////////////////////////
let tesla_Array = []
let tata_Array = []
let toyota_Array = []

function sortClass() {
carray.map(function(car){
  if (car.constructor.name === "Tesla"){
    tesla_Array.push(car)
  } else if (car.constructor.name === "Tatas"){
    tata_Array.push(car)
  } else {
    toyota_Array.push(car)
  }
})

let sortedArray = tesla_Array.concat(tata_Array,toyota_Array)
return sortedArray
}

function sortByYear(array) {
  array.map(function(car){

  if (parseInt(car.model) > parseInt(array[1].name) {
    array.reverse
  }
  })
}
