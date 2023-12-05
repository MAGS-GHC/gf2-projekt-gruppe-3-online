function Employee(fName, lName, ID, email, pass) {
    this.firstName = fName;
    this.lastName = lName;
    this.IDnum = ID;
    this.email = email;
    this.password = pass;
}

const employeeList = [];
employeeList.push(KaBi0001 = new Employee("Karsten","Birch","0001","KaBi0001fakemail@madeup.org","password1"))
employeeList.push(MiSo0001 = new Employee("Michael","Solm","0001","MiSa0001fakemail@madeup.org","password3"))
employeeList.push(BiBi0001 = new Employee("Bitte","Biwald","0001","BiBi0001fakemail@madeup.org","password2"))


function populateEmployees() {
    
}

function doStuff() {
    let ourVal = document.getElementById("userID").value;
    console.log(ourVal)
    document.getElementById("testOutput").innerText = "Ugyldigt brugerID";
    console.log(employeeList.indexOf(ourVal))
    console.log(employeeList[0])
    if (employeeList.includes(ourVal)) {
        document.getElementById("testOutput").innerText = "";
    }

}