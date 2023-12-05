const charsBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
document.getElementById("sliderOutput").innerText = document.getElementById("pswLength").value;



function generatePassword() {
    let passLength = document.getElementById("pswLength").value;
    let password = ""
    let charsAllowed = generateCharsAllowed(charsBase);
    for (i=0;i<passLength;i++) {
        password += charsAllowed[Math.floor(Math.random() * charsAllowed.length)]
    }
    document.getElementById("passwordOutput").innerText = "Your new password is: " + password
}

function updateVals() {
    document.getElementById("sliderOutput").innerText = document.getElementById("pswLength").value;

}

function generateCharsAllowed(charset) {
    if (document.getElementById("danLetters").checked) {
        charset += document.getElementById("danLetters").value
    }
    if (document.getElementById("mathSigns").checked) {
        charset += document.getElementById("mathSigns").value
    }
    return charset;
}