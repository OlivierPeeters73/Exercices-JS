/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    

    let image = document.getElementsByTagName("img");   // selectionne les elements "img"
    let over = image[0].getAttribute("data-hover");     // selectionne la source pour le over
    let out = image[0].src;                             // selectionne la source pour le out

    image[0].addEventListener("mouseover", mouseOver);
    image[0].addEventListener("mouseout", mouseOut);

    function mouseOver() {
        image[0].src = over;
    }
      
    function mouseOut() {
        image[0].src = out;
    }


/* code de Seb raccourci (change l'image au survol de l'image)

let cible = document.querySelector('img');
cible.addEventListener("mouseover", function () {
    cible.src = cible.getAttribute("data-hover"); //set src de img en y prenant l'attribut data-image de l'id source
})

*/



/* code de Seb (change l'image au survol de la section)

const classCible = document.getElementsByClassName("material")[0];

    classCible.addEventListener("mouseover", function () {

        let cible = document.querySelector('img');
        cible.src = cible.getAttribute("data-hover"); //set src de img en y prenant l'attribut data-image de l'id source
    })
*/

})();
