/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
    
    // suppressions
    fruits.shift();     // supprime le 1er élément et met INDEX et LENGTH à jour
    fruits.pop();       // supprime le dernier élément et met LENGTH à jour

    // ajouts
    fruits.unshift('banane');       // ajoute un élément au début et ajuste INDEX et LENGTH
    fruits[fruits.length] = 'kiwi'; // ajoute un élément en dernière position en utilisant la propriété LENGTH

    console.log(fruits);
    
    });

})();
