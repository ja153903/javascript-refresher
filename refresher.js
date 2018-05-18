const PI = 3.141593

// Block scoping variables
//for (let i = 0; i < a.length; i++) {
//    let x = a[i]
//}

//for (let i = 0; i < b.length; i++) {
//    let y = b[i]
//}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = () => i * 2;
}

console.log(callbacks[0]() === 0)
console.log(callbacks[1]() === 2)
console.log(callbacks[2]() === 4)
