/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let password = document.getElementById("pass-one");
    let count = document.getElementById("counter");
    password.setAttribute("maxLength", "10");

    password.addEventListener("input", () => {

        let length = password.value.length;
        count.innerHTML = `${length}/10`;

    });
            
})();
