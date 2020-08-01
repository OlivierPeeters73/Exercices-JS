/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let password = document.getElementById("pass-one");

    password.addEventListener("input", () => {

        let length = password.value.length;
        let numberCounter = password.value.replace(/[^0-9]/g, "").length;

        if (length >= 8 && numberCounter >= 2) {
            document.getElementById("validity").innerHTML = "ok";
        } else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }

    });
            
})();
