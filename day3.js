//loop

//sum of n natural numbers and factorial of numbers

// var n = Number(prompt('Enter the number'));
// if (isNaN(n)) {
//   console.log('Invalid input');
// } else {
//   if (n > 0) {
//     var fact = 1;
//     for (i = 1; i <= n; i++) {
//       fact = fact * i;
//     }
//     console.log(fact);
//   } else {
//     console.log('plz enter +ve value and more than 0');
//   }
// }

//factors of number
// var pr = prompt('Enter the number');
// if (pr === null) {
//   console.log('Cancelled');
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log('Invalid input');
//   } else {
//     if (n > 0) {
//       for (var i = 0; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log('plz enter +ve value and more than 0');
//     }
//   }
// }

//Prime numbers
var pr = prompt('Enter the number');
if (pr === null) {
  console.log('Cancelled');
} else {
  var n = Number(pr);
  if (isNaN(n)) {
    console.log('Invalid input');
  } else {
    if (n > 0) {
      var primeHai = true;
      for (var i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
          primeHai = false;
        }
        console.log(primeHai);
      }
    } else {
      console.log('plz enter +ve value and more than 0');
    }
  }
}
