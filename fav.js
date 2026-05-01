let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.innerText.trim();

        if (value === "AC") {
            input.value = "";
        } 
        else if (value === "C") {
            input.value = input.value.slice(0, -1);
        } 
        else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } 
        else {
            input.value += value;
        }
    });
});




