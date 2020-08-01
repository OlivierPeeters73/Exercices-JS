/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () => {

        let monthName = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
        let year = document.getElementById("year").value;
        let month;
        
        for (month = 0; month < 12; month++) {
            let date = new Date();
            date.setDate(13);
            date.setMonth(month);
            date.setFullYear(year);
            
            if (date.getDay() == 5) {
                alert("vendredi 13 " + monthName[month] + " " + year);
            }
        }
    })

})();
