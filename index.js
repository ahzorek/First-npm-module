const square = require('testemodulonpm')

const squarePlusSomething = (num, num2 = 2) => {
  return square(num) + num2
}

module.exports = function (num, num2) {
  return squarePlusSomething(num, num2)
}