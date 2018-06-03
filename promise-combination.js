const fetchAsync = (url, timeout, onData, onError) => {
    console.log('Something here')
}

let fetchPromised = (url, timeout) => {
    return new Promise((resolve, reject) => {
        fetchAsync(url, timeout, resolve, reject);
    });
}

Promise.all([
    fetchPromised("something.com", 500),
    fetchPromised("somethign else.com", 500)
]).then((data) => {
    let [ foo, bar, baz ] = data
    console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
}, (err) => {
    console.log(`error: ${err}`)
})