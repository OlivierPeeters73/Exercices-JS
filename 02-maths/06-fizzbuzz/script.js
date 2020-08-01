/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {

    // your code here
    for ( let num = 1; num <= 100; num++) {
        if (num%3==0 && num%5!==0) {
            console.log(num + " fizz");
        } else if (num%5==0 && num%3!==0) {
            console.log(num + " buzz");
        } else if (num%5==0 && num%3==0) {
            console.log(num + " fizzbuzz");
        } else console.log(num);
     };
    
})();
