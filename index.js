// const fs = require('fs')
// const data = require('./data')

// for (let i = 0; i < 10000; i++) {
//     fs.writeFileSync('./context/big.txt', `${data}${i}\n`, {flag: 'a'})
    
// }
















// // Fetch data from API
// //The fetchAPI call returns a promise which resolves asynchronously later.
// fetchAPI('/users') 
//   .then(users => {
//     // Executed when promise resolves
//     console.log(users)  
//   })

// // Scheduled callback 
// //The setInterval schedules a callback to run every 1000ms.
// setInterval(() => {
//   console.log('Interval callback')
// }, 1000)

// // CPU-intensive work
// //The block function simulates CPU-intensive work that blocks the event loop.
// function block() {
//   // Synchronously loops to block event loop
//   for(let i = 0; i < 1e9; i++) { 
//     // Do nothing
//   }
// }

// block() // Don't do this!