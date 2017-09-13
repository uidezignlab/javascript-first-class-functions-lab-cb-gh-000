const doubler = 2;
const tripler = 3;

function countdown(callback){
  window.setTimeout(callback(), 2000)
}

function createMultiplier(multiplierValue){
  return function () {
    return 5 * multiplierValue
  }
}
let doublerWithBind = 2;
let triplerWithBind = 3;
function multiplier(multiplierValue, value){
  return multiplierValue * value
}