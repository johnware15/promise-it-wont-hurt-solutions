'use strict';

    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout( () => {
        fulfill('FULFILLED!');
      }, 3000);
    });

    promise.then(console.log);


// setTimeout( () => {
//   console.log("HELLO!");
// }, 1000)
// var promise = get('example.json')
// .then(fulfill)
// .then(reject);
