//Promises make writing performant, asynchronous code much easier and more fun.

// ## Task
//
// For this first lesson, let’s review what we already know about asynchronous
// operations in JavaScript.
//
// Using setTimeout, print the string 'TIMED OUT!' after 300ms.

function setTimeout() {

  function promise(){}

  promise.prototype.then = function() {
    console.log('TIMED OUT');

      };

    setTimeout(function(){
      return setTimeout;
    } ,3000);

      return promise;

}
