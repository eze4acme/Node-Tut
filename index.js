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
function generatePassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  
  const password = Array.from({ length }, () => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  }).join('');

  return password;
}

// Usage example
const newPassword = generatePassword(10);
console.log(newPassword);







// const text = 'baby linda'
// const char = Array.from(text)

// console.log(char.join(''));
// const item = 'hi'
// const arr = Array.from({length: 21}, () => {
//     return char
// })
// console.log(arr);