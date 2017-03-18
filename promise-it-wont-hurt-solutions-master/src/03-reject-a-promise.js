
var promise = new Promise(function (fulfill, reject) {
    setTimeout( () => {
      reject('REJECTED!');

    }, 3000);
  });

  promise.then(console.log);
