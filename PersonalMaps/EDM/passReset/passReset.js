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
    /*if (typeof this[ourVal][passReset] != "object") {
        passResetInit();
    }*/
    document.getElementById("testOutput").innerText = "Placeholder for mail sendt/id-kode token";
    confirm("Når du trykker confirm, vil en mail blive sendt til " + this[ourVal].email + ", med instrukser, til at nulstille din adgangskode. Fortsat god dag, " + this[ourVal].firstName + "!")
}

function passResetInit() {

}