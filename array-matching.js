'use strict'

var list = [1, 2, 3]
var [a, b] = list

console.log(`${a}, ${b}`)

var [b, a] = [a, b]

console.log(`${a}, ${b}`)
