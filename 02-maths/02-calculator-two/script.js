/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case "addition":
                let num1 = parseInt(document.getElementById("op-one").value);
                let num2 = parseInt(document.getElementById("op-two").value);
                let result = num1 + num2;
                alert(result);
                
                break;

            case "substraction":
                let num1 = parseInt(document.getElementById("op-one").value);
                let num2 = parseInt(document.getElementById("op-two").value);
                let result = num1 - num2;
                alert(result);
                
                break;
                
            case "multiplication":
                let num1 = parseInt(document.getElementById("op-one").value);
                let num2 = parseInt(document.getElementById("op-two").value);
                let result = num1 * num2;
                alert(result);
                
                break;

            case "division":
                let num1 = parseInt(document.getElementById("op-one").value);
                let num2 = parseInt(document.getElementById("op-two").value);
                let result = num1 * num2;
                alert(result);
                
                break; 
        
            default:
                alert("error");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
