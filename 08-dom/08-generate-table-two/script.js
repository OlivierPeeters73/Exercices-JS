/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let tableau = document.createElement("table");
    let target = document.getElementById("target");
    target.appendChild(tableau);
    
    for (i = 1; i <= 10; i++) {
        let row = tableau.insertRow();
        for (j = 1; j <= 10; j++) {
            let cell = row.insertCell();
            cell.innerHTML = j*i;
        }
    }

    
})();
