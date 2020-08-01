/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let tableau = document.createElement("table");
    tableau.setAttribute("id", "myTable");
    document.getElementById("target").appendChild(tableau);


    
    for (let i = 1; i <= 10; i++){
        let row = document.createElement("TR");
        tableau.appendChild(row);
        let cell = row.insertCell();
        cell.innerHTML = i;
    }
 
/* code de Massato:

   let newTable = document.createElement("table");
    let target = document.getElementById("target");
    target.appendChild(newTable);
    
    for (i = 0; i <= 10; i++) {
        newTable.insertRow().insertCell().innerHTML = "test";
    }

*/
    

/* code de Seb:

    let tableau = document.createElement("table");
        let target = document.getElementById('target');
        target.appendChild(tableau);

        for (i=0; i<10; i++){
        let row = tableau.insertRow(i);
        let cell = row.insertCell(0);
        cell.innerHTML = i;
        }

    */

})();
