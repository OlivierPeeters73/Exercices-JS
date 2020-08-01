/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    


    document.getElementById("run").addEventListener("click", () => {
            
        /* let person = new Object();
            person.lastname = "Myself";
            person.firstname = "Me";
            person.age = "33";
            person.city = "Bxl";
            person.country = "Belgium";
                
        console.log(`Bonjour, je m\'appelle ${person.firstname} ${person.lastname}, `); */

        let person = {
            lastname: "Myself",
            firstname: "Me",
            age: "33",
            city: "Bxl",
            country: "Belgium",
        };
        
        console.log(`Bonjour, je m'appelle ${person.firstname} ${person.lastname}, j'ai ${person.age}ans et j'habite à ${person.city} en ${person.country}`);

    })



})();
