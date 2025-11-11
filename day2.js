//Understanding Conditionals | DSA with JavaScript | Part 2

// shop discount
// let amount = Number(prompt('Enter your amount'));
// let dis = 0;
// if (amount >= 9000) {
//   dis = 20;
// } else if (amount >= 7000) {
//   dis = 10;
// } else if (amount >= 5000) {
//   dis = 5;
// } else {
//   dis = 0;
// }
// let discount = (amount * dis) / 100;
// let fiamount = amount - discount;
// console.log('You grab the discount :' + dis + '%');
// console.log('Your Total Amount :' + amount);
// console.log('Final Amount to pay ' + fiamount);

//Electricity Unit
// let unit = Number(prompt('Enter the amount'));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;//1300
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;//1600
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;//600
//   unit = 100;
// }
// amount += unit * 4;//400
// console.log(amount);

//ATM Cash Denomination Finder
// let amount = Number(prompt('Enter the amount'));
// console.log('Your Entered Amount = ' + amount);
// if (amount >= 500) {
//   console.log('Total note of 500 =' + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log('Total note of 200 =' + Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log('Total note of 100 =' + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log('Total note of 50 =' + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log('Total note of 20 =' + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log('Total note of 10 =' + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log('Total coin of 5 =' + Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log('Total coin of 2 =' + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount >= 1) {
//   console.log('Total coin of 1 =' + Math.floor(amount / 1));
// }

// function isPalindrome(value) {
//   const s = String(value)
//     .toLowerCase()
//     .replace(/[^a-z0-9]/g, '');
//   return s === s.split('').reverse().join('');
// }
// console.log(isPalindrome(121));
