const doubler = 2, tripler = 3;

function countdown(callback){
  window.setTimeout(callback(), 2000)
}

function createMultiplier(multiplierValue){
  return function () {
    5 * multiplierValue
  }
}

// function multiplier(multiplierValue, value){
//   
// }