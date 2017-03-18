/*
  * This code is bad, but nonetheless common and has the nasty result of
  * calling the supplied callback more than once (possibly destroying the
  * earth?). It is conventional to return the first invocation of callback
  * but it’s easy to overlook!
  */

 // function myFunc(user, callback) {
 //   if (user) {
 //     callback(null, user);
 //   }
 //
 //   return callback('No user was found', null);
 // }

var promise = new Promise(function (fulfill, reject){
  setTimeout( () => {
    fulfill('I FIRED!');
    reject('I DID NOT FIRE!');
  }, 3000);

});

  promise.then(console.log);
  promise.catch(console.log);
