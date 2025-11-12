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
// var pr = prompt('Enter the number');
// if (pr === null) {
//   console.log('Cancelled');
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log('Invalid input');
//   } else {
//     if (n > 0) {
//       var primeHai = true;
//       for (var i = 2; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           primeHai = false;
//         }
//         console.log(primeHai);
//       }
//     } else {
//       console.log('plz enter +ve value and more than 0');
//     }
//   }
// }

//sum of all numbers
// var pr = prompt('Enter the number');
// if (pr === null) {
//   console.log('Cancelled');
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log('Invalid input');
//   } else {
//     if (n > 0) {
//       var sum = 0;

//       while (n > 0) {
//         var rem = n % 10; //n ki value ko agar 10 se mode kroge to last value return krega
//         sum = sum + rem;
//         n = Math.floor(n / 10); //n ki value ko aagar 10 se divide & floor use kroge to last delete kr dega
//       }
//       console.log(sum);
//     } else {
//       console.log('plz enter +ve value and more than 0');
//     }
//   }
// }

// Reverse Number
// var pr = prompt('Enter the number');
// if (pr === null) {
//   console.log('Cancelled');
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log('Invalid input');
//   } else {
//     if (n > 0) {
//       var rev = 0;
//       while (n > 0) {
//         var rem = n % 10; //last value return
//         rev = rev * 10 + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(rev);
//     } else {
//       console.log('Should be +ve and more than 0');
//     }
//   }
// }

//strong number //all n number ki factorial value ki plus and n number same he to vo strong number he

// var pr = prompt('Enter the number');
// if (pr === null) {
//   console.log('Cancelled');
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log('Invalid input');
//   } else {
//     if (n > 0) {
//       var sum = 0;
//       var copy = n;
//       while (n > 0) {
//         var rem = n % 10;
//         for (var i = 1; i <= rem; i++) {
//           var fact = fact * 1;
//         }
//         sum = sum + i;
//         n = Math.floor(n / 10);
//       }
//       if (copy == sum) {
//         console.log('Strong');
//       } else {
//         console.log('Not Strong');
//       }
//     } else {
//       console.log('Should be +ve and more than 0');
//     }
//   }
// }

//Guess the number game

// let random = Math.floor(Math.random() * 100) + 1;
// var guess = -1;
// while (guess !== random) {
//   guess = Number(prompt('Guess the Number'));
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     alert('try again ! Enter the number b/w 1 to 100');
//     continue;
//   }
//   if (guess > random) {
//     alert('Too high');
//   } else if (guess < random) {
//     alert('Too low');
//   } else {
//     alert('Congratulation You Guess The Right Number ' + guess);
//   }
// }
