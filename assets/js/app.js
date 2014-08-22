
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

$(function () {
  var car = {};

  Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 4
  });

  Object.defineProperty(car, 'wheels', {
    configurable: false,
    value: 4
  });
  
  delete car.doors;
  console.log(car.doors);

  delete car.wheels;
  console.log(car.wheels);

  Object.defineProperty(car, 'doors', {
    configurable: true,
    value: 5
  });
  console.log(car.doors);
  //=> 5
  Object.defineProperty(car, 'wheels', {
    configurable: true,
    value: 3
  });
  // => Uncaught TypeError: Cannot redefine property: wheels


}());
