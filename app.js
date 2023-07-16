const os = require('os')
const path = require('path')
const http = require('http')
const fs = require('fs')
const eventEmitter = require('events')

// console.log(fs.promises);

// async function start() {
//    try {
//      const first = await fs.readFile('./context/first.txt', 'utf-8')
//     const second = await fs.readFile('./context/second.txt', 'utf-8')
//     await fs.writeFile('./context/mind-twikling', `${first} and ${second}` )
//     console.log(`This is awsome: ${first} ${second}`);
//    } catch (error) {
//     console.log(error);
//    }
// }
// start()





// console.log(os);

// const result = {
//     name: os.userInfo(),
//     mem: os.freemem(),
//     uptime: os.uptime(),
//     check: os.networkInterfaces()
// }
// console.log(result);

// console.log(path.resolve(__dirname, 'content', 'subfolder', 'text.txt'));

// const server = http.createServer((req, res) =>{
    // res.write('welcome to home page')
    // res.write(`<h1> hello people of God, we love you</h1>`)
    // res.end()
// })



// server.listen(5000, console.log('listening on port 5000'))



// const server = http.createServer()

// server.on('request',(req, res) =>{
//     res.write(`<h1> hello peopledddd of God, we love youhhh txxhh ghre</h1>`)
// } )
// server.listen(3000)

// const newEmit = new eventEmitter()

// newEmit.on('response', () =>{
//     console.log('hi eze');
// })

// newEmit.emit('response')

// const stream = fs.createReadStream('./context/big.txt', 'utf8')

// stream.on('data', (result) => {
//     console.log(result);
// })

const server = http.createServer()

server.on('request', (req, res) =>{
    const text = fs.readFileSync('./context/big.txt', 'utf-8')
    res.end(`<h6>${text}</h6>`)
})
server.listen(4000)