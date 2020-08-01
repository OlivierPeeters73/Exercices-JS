/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    function constructDate() {
        // noms de jours et mois
        let days = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
        let month = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");

        // pour prendre la date
        let date = new Date();

        // construction message à afficher
        let message = days[date.getDay()] + " ";    // nom du jour
        message += date.getDate() + " ";            // jour du mois
        message += month[date.getMonth()] + " ";    // nom du mois
        message += date.getFullYear() + ", ";       // année
        message += date.getHours() + "h";           // heure
        message += date.getMinutes();               // minutes

        
        return message;

    };

    document.getElementById("target").innerHTML = constructDate();



})();