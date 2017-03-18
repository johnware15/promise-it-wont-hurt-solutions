var promise = new Promise(function (fulfill, reject) {
    setTimeout( () => {
      fulfill('PROMISE VALUE')
      console.log('MAIN PROGRAM');
    }, 3000);

});

    promise.then(console.log);
