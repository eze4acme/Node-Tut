const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    image: 'image_url_1.jpg',
    reviews: [
      {
        title: 'Great product!',
        rating: 5,
        comment: 'I love this product. It works really well and exceeded my expectations.'
      },
      {
        title: 'Not so good',
        rating: 2,
        comment: 'The product didn\'t work as advertised. I was disappointed with the performance.'
      }
    ]
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description of Product 2',
    image: 'image_url_2.jpg',
    reviews: [
      {
        title: 'Highly recommended!',
        rating: 4,
        comment: 'This product is amazing. It has made my life so much easier.'
      },
      {
        title: 'Decent product',
        rating: 3,
        comment: 'The product is okay, but it could be better. It has some limitations.'
      }
    ]
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    image: 'image_url_3.jpg',
    reviews: [
      {
        title: 'Impressive!',
        rating: 5,
        comment: 'I am blown away by this product. It has exceeded all my expectations.'
      },
      {
        title: 'Needs improvement',
        rating: 2,
        comment: 'The product has some flaws and could use more features.'
      }
    ]
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description of Product 4',
    image: 'image_url_4.jpg',
    reviews: [
      {
        title: 'Excellent choice!',
        rating: 4,
        comment: 'I am very happy with this product. It works flawlessly.'
      },
      {
        title: 'Not worth it',
        rating: 1,
        comment: 'I regret buying this product. It broke within a week of use.'
      }
    ]
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description of Product 5',
    image: 'image_url_5.jpg',
    reviews: [
      {
        title: 'Amazing product!',
        rating: 5,
        comment: 'I can\'t recommend this product enough. It has changed my life.'
      },
      {
        title: 'Average performance',
        rating: 3,
        comment: 'The product works fine, but it\'s nothing exceptional.'
      }
    ]
  }
];



// const { Module } = require("module")

// const string1 = `Here is a 197 character take on why the event loop is hard in Node.js:

// The event loop is the secret sauce enabling Node.js to handle high concurrency with a single thread.
//  But wrapping your head around its event-driven,
//   non-blocking I/O model is challenging coming from a threaded blocking I/O mindset. 
//   Understanding concepts like the call stack, callback queue, 
//   and how to avoid issues like long running tasks blocking the event loop takes time. 
//   Proper use of callbacks, promises, async/await is key. 
//   The event loop forces you to think differently about code execution order and performance. 
//   Mastering the event loop and non-blocking I/O is critical to writing optimized, scalable Node.js apps.`
// // console.log(string1);
//   module.exports = string1

module.exports = products