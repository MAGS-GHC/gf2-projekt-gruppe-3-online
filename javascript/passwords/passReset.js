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
    MiSo0001 = new Employee("Michael","Solm","0001","MiSa0001fakemail@madeup.org","password3")
    BiBi0001 = new Employee("Bitte","Biwald","0001","BiBi0001fakemail@madeup.org","password2")
    
}


let ourVal;
function doStuff() { 
    document.getElementById("testOutput").innerText = "";
    ourVal = document.getElementById("userID").value;
    if (typeof this[ourVal] != "object") {
        document.getElementById("testOutput").innerText = "Ugyldigt brugerID";
        return;
    }
    if (typeof this[ourVal]["passReset"] === "number") {
        passResetInit();
        return;
    }
    confirm("Når du trykker confirm, vil en mail blive sendt til " + this[ourVal].email + ", med instrukser, til at nulstille din adgangskode. Fortsat god dag, " + this[ourVal].firstName + "!")
    mailPlaceholder();
    passResetInit();
}

function doStuff2() {
    if (document.getElementById("resetVerify").value == this[ourVal]["passReset"]) {
        this[ourVal]["password"] = prompt("Enter your new password")
        delete this[ourVal]["passReset"];
    }
    else {
        delete this[ourVal]["passReset"];
        alert("Ikke korrekt. Start forfra.")
    
    }
    document.getElementById("resetVerify").style.visibility = "hidden"
    document.getElementById("knap2").style.visibility = "hidden"
}

function mailPlaceholder() {
    //this[ourVal].email
    this[ourVal]["passReset"] = (Math.floor(Math.random()*100000) + 100000)
}

function passResetInit() {
    document.getElementById("testOutput").innerText = "Indtast koden fra din email for at fortsætte";
    document.getElementById("resetVerify").style.visibility = ""
    document.getElementById("knap2").style.visibility = ""
}

