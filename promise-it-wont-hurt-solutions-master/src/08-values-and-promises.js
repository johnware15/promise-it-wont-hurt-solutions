
// var promise = new Promise(function () {
//     attachFile( () => {
//       let attachFile = 'DR. ';
//       fulfill('MANHATTAN');
//     });
//     });
//     promise.then(console.log(attachFile + 'MANHATTAN'));
'use strict';
const attachFile = 'DR. ';
var promise = new Promise(function (fulfill, reject) {


    return attachFile('DR. ') || fulfill('MANHATTAN');
  });


  .then(function () => {

    });
