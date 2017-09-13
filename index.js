var doubler = 2;
var tripler = 3;

function countdown(callback){
  window.setTimeout(callback(), 2000)
}

function createMultiplier(multiplierValue){
  return function () {
    return 5 * multiplierValue
  }
}
var doublerWithBind = 2;
var triplerWithBind = 3;
function multiplier(multiplierValue, value){
  return multiplierValue * value
}
