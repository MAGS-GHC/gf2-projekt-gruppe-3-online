//object constructor
function KPI(dateIn, ordersIn, precisionIn, faultsIn) {
    this.dateID = dateIn;
    this.orders = ordersIn;
    this.precision = precisionIn;
    this.faults = faultsIn;
}

//use constructor for test values
const test1 = new KPI(2003, 125, 65.50, 4);
const test2 = new KPI(2005, 220, 85.50, 2);
const test3 = new KPI(2004, 330, 75.50, 3);
let testValueArr = [test1,test2,test3];

//sort by orders

function sortBy() {
    let sortType = document.getElementById("sortByOptions").value;
    let highLow = document.getElementById("lowHighSelect").value;
    if (highLow === "highToLow") {
        testValueArr.sort(function(a, b) {return b[sortType]-a[sortType]})
    }
    else if (highLow === "lowToHigh") {
        testValueArr.sort(function(a, b) {return a[sortType]-b[sortType]})
    }
    console.table(testValueArr);
    //function(a, b), reverse with function(b, a)?



}



let KPIsource = document.getElementById("KPIfile");

function calcTable() {
    KPIsource = document.getElementById("KPIfile");
    console.log(KPIsource);
    console.log(KPIsource[2])
    console.table(KPIsource)
}

//sort