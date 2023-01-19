// const p = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//     resolve('Something went right!')
//    }, 2000)
// })

// p.then(function(result) {
//     console.log(result);
//     return 42;
//   }).then(function(result) {
//     console.log(result);
//     return 'Done!'
//   }).then(function(result) {
//     console.log(result);
//   });

function asyncAdd(a, b, delay) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(a + b)
        }, delay)
    })
}

asyncAdd(5, 10, 2000)
    .then(function(sum) { //the argument in the callback function passed to .then() is always the resolved value of the promise
        console.log(sum)
        return asyncAdd(sum, 100, 1000)
    })
    .then(function(sum) {
        console.log(sum)
        return asyncAdd(sum, 1000, 2000)
    })
    .then(function(sum) {
        console.log(sum)
    })