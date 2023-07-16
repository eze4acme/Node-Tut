// const { Module } = require("module")

const string1 = `Here is a 197 character take on why the event loop is hard in Node.js:

The event loop is the secret sauce enabling Node.js to handle high concurrency with a single thread.
 But wrapping your head around its event-driven,
  non-blocking I/O model is challenging coming from a threaded blocking I/O mindset. 
  Understanding concepts like the call stack, callback queue, 
  and how to avoid issues like long running tasks blocking the event loop takes time. 
  Proper use of callbacks, promises, async/await is key. 
  The event loop forces you to think differently about code execution order and performance. 
  Mastering the event loop and non-blocking I/O is critical to writing optimized, scalable Node.js apps.`
// console.log(string1);
  module.exports = string1