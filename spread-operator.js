var params = ["hello", true, 7]
var other = [1, 2, ...params] // allows us to flatten the values from params into the new array

const f = (x, y, ...a) => (x + y) * a.length

console.log(f(1, 2, ...params) === 9)

var str = "foo"
var chars = [...str] // ["f", "o", "o"]
