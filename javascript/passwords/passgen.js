const charsBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const charsOptional = "æøåÆØÅ!@#$%+-/*"
updateVals();
createCheckbox(charsOptional);


function generatePassword() {
    let passLength = document.getElementById("pswLength").value;
    let password = ""
    let charsAllowed = generateCharsAllowed(charsBase);
    for (i=0;i<passLength;i++) {
        password += charsAllowed[Math.floor(Math.random() * charsAllowed.length)]
    }
    document.getElementById("passwordOutput").innerText = "Generated password: " + password
}

function updateVals() {
    document.getElementById("sliderOutput").innerText = document.getElementById("pswLength").value;

}

function createCheckbox(charOpt) {
    let checkboxDiv = document.getElementById("checkboxDiv");
    for (i=0;i<charOpt.length;i++) {
        //create checkbox for each charOpt
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        checkbox.type = "checkbox";
        checkbox.id = "checkbox" + i;
        label.htmlFor = "checkbox" + i;
        label.innerText = charOpt[i]
        checkbox.value = charOpt[i]
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
    }
}

function generateCharsAllowed(charset) {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    checkboxes.forEach(checkStatus)
    function checkStatus(checkbox) {
        if (checkbox.checked) {
            charset += checkbox.value
        }
    }
    return charset;
}