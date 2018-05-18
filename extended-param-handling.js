// spread operator allows us to give a variable length of items
const f = (x, y, ...a) => (x + y) * a.length

console.log(f(1, 2, "hello", true, 7) === 9)
