function Employee(fName, lName, ID, email, pass) {
    this.firstName = fName;
    this.lastName = lName;
    this.IDnum = ID;
    this.email = email;
    this.password = pass;
    //this.passReset = codeFromEmail
}

populateEmployees();

function populateEmployees() {
    aa = new Employee("Karsten","Birch","0001","KaBi0001fakemail@madeup.org","password1")
    KaBi0001 = new Employee("Karsten","Birch","0001","KaBi0001fakemail@madeup.org","password1")
    MiSo0001 = new Employee("Michael","Solm","0001","MiSo0001fakemail@madeup.org","password3")
    BiBi0001 = new Employee("Bitte","Biwald","0001","BiBi0001fakemail@madeup.org","password2")
}

let ourVal;
function checkValidID() { 
    document.getElementById("textMessage").innerText = "";
    ourVal = document.getElementById("userID").value;
    if (typeof this[ourVal] != "object") { 
        document.getElementById("textMessage").innerText = "Ugyldigt brugerID";
        return;
    }
    if (typeof this[ourVal]["passReset"] === "number") {
        passResetInit();
        return;
    }
    mailPlaceholder();
    passResetInit();
}

function checkResetCode() {
    if (document.getElementById("resetVerify").value == this[ourVal]["passReset"]) {
        document.getElementById("passGenerator").style.visibility = "";
    }
    else {
        delete this[ourVal]["passReset"];
        alert("Ikke korrekt. Start forfra.")
        document.getElementById("userID").value = "";
        document.getElementById("userID").disabled = false;
        document.getElementById("userIDbutton").disabled = false;
    }
    document.getElementById("resetVerify").style.visibility = "hidden"
    document.getElementById("resetVerifybutton").style.visibility = "hidden"
}

function mailPlaceholder() {
    //this[ourVal].email
    document.getElementById("userID").disabled = true;
    document.getElementById("userIDbutton").disabled = true;
    this[ourVal]["passReset"] = (Math.floor(Math.random()*100000) + 100000)
}

function passResetInit() {
    document.getElementById("textMessage").innerText = "En mail er blevet sendt til " + this[ourVal].email + ", med instrukser, til at nulstille din adgangskode. Indtast koden fra din email for at fortsætte, og fortsat god dag, " + this[ourVal].firstName + "!";
    document.getElementById("resetVerify").style.visibility = ""
    document.getElementById("resetVerifybutton").style.visibility = ""
}

function resetVars() {
    document.getElementById("passGenerator").style.visibility = "hidden";
    document.getElementById("textMessage").innerText = ""
    document.getElementById("userID").value = "";
    document.getElementById("userID").disabled = false;
    document.getElementById("userIDbutton").disabled = false;
    document.getElementById("textMessage").innerText = "Indtast brugerID for at nulstille din adgangskode"
}