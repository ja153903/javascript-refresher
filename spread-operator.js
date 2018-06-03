var params = ["hello", true, 7]
var other = [1, 2, ...params] // allows us to flatten the values from params into the new array

const f = (x, y, ...a) => (x + y) * a.length

console.log(f(1, 2, ...params) === 9)

var str = "foo"
var chars = [...str] // ["f", "o", "o"]

var {a, b, c, ...x} = {a: 1, b: 2, c: 3, x: 4, y: 5, z: 6}

console.log(a)
console.log(b)
console.log(c)

console.log(x)
