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

// const list = document.querySelectorAll('.player-piece')
// console.log(list);

// console.log(Array.from(list));
// const newList = Array.from(list)
// const newItem = newList.find((item) => item.innerHTML === 'player')
// console.log(newItem);


const text = 'babylinda'
const char = Array.from(text)

console.log(char.join(''));

const arr = Array.from({length: 10}, () => {
    const randNum = Math.floor(Math.random()*char.length)
    console.log(randNum);
   return char[randNum]
})
console.log(arr.join(''));


const setPpl = ['mark', 'like', 'mark', 'shake']

console.log([ "all",...new Set(setPpl)]);