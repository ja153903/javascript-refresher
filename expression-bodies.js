const _ = require('lodash')

const evens = _.range(0, 100, 2)

const odds = evens.map(num => num + 1)
const pairs = evens.map(num => ({"even": num, "odd": num+1}))

console.log(odds)
console.log(pairs)

var fives = []
evens.forEach(num => {
    if (num % 4 == 0)
        fives.push(num)
})

console.log(fives)
