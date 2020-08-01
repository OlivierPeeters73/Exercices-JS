/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let imageSource = document.getElementById("source");    // select tag with id "source"

    let imageData = imageSource.getAttribute("data-image"); // take the value of attribute "data-image"

    let imageTarget = document.getElementById("target");    // select tag with id "target"

    let imageNew = document.createElement("img");           // create "img" element
    imageNew.setAttribute('src', imageData);                // add the source in "src"

    imageTarget.appendChild(imageNew);                      // put "img" in element with id "target"

    imageSource.removeAttribute("data-image");              // remove data-image from "source"
    

    /* code de Seb:
    
     let img = document.createElement("img");                                   //crée la balise <img>
        img.src = document.getElementById("source").getAttribute("data-image"); //set src de img en y prenant l'attribut data-image de l'id source
        let destination = document.getElementById("target");                    //selectionne la destination target
        destination.appendChild(img);                                           //applique la balise img en enfant de target
        document.getElementById("source").removeAttribute("data-image");        // enleve data image dans source
    */
    
})();
