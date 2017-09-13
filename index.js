
function countdown(callback){
  window.setTimeout(callback(), 2000)
}
countdown();
function createMultiplier(multiplierValue){
  return function () {
    return 5 * multiplierValue
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = 2;
var triplerWithBind = 3;
function multiplier(multiplierValue, value){
  return multiplierValue * value
}

doubler = multiplier.bind(doublerWithBind);
multiplier.bind(triplerWithBind);
