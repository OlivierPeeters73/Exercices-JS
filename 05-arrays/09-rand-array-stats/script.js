/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {

        let numbers = new Array;
        let sum = 0;
        function remplir() {
            for (let i = 0; i < 10; i++) {

                let r = parseInt(Math.floor(Math.random()*100));    // génère un nombre entre 1 et 100

                numbers[i] = r;                                     // ajoute le nombre aléatoire dans l'array

                document.getElementById("n-" + (i + 1)).innerHTML = numbers[i]; // ajoute les nombres dans le tableau en n-x
                                
                sum += parseInt(numbers[i]);
            }
        };
        remplir();

        document.getElementById("min").innerHTML = Math.min(...numbers);
        document.getElementById("max").innerHTML = Math.max(...numbers);
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum/10;
    
    });


    
})();
