/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    

    document.getElementById("run").addEventListener("click", () => {

        let today = new Date();                                     //date aujourd'hui
        let year = document.getElementById("dob-year").value;       //année naissance
        let month = document.getElementById("dob-month").value;     //mois naissance
        let day = document.getElementById("dob-day").value;         //jour naissance
        let age = today.getFullYear() - year;
        
        if (today.getMonth() < (month - 1) || (today.getMonth() == (month - 1) && today.getDate() < day)) {
            age--;
            age += " ans";
            alert(age);

        } else if (today.getMonth() == (month - 1) && today.getDate() == day) {
            age += " ans -- Joyeux anniversaire !";
            alert(age);
        } else {
            age += " ans";
            alert(age);
        }


    });

})();
