/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here

        let i, fact=1, num = document.getElementById("number").value;
        for (i=1; i<=num; i++) {
            fact*=i;
        };
        alert("Factorielle: " +fact);



    });
})();
