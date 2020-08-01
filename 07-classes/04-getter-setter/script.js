/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name (value) {
                value = value.split(" ");
                this.firstname = value[0];
                this.lastname = value[1];
            }
        }

    document.getElementById("run").addEventListener("click", () => {

        let person1 = new Person("Me", "Myself");
        console.log(person1.name);
        person1.name = "Olivier Peeters";
        console.log(person1.name);
        person1.name = "Rocky Balboa";
        console.log(person1.name);
    })

})();
