//object constructor
function KPI(dateIn, ordersIn, precisionIn, faultsIn) {
    this.date = dateIn;
    this.orders = ordersIn;
    this.precision = precisionIn;
    this.faults = faultsIn;
    console.log("Ran")
}

//use constructor for test values
const test1 = new KPI(2003, 125, 65.50, 4);
const test2 = new KPI(2004, 220, 85.50, 2);
const test3 = new KPI(2005, 330, 75.50, 3);

document.getElementById("testField").innerText = test1 + " --- " + test2 + " --- " + test3;

