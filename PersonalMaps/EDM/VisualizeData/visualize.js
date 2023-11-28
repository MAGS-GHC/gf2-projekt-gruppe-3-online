let KPIparsed;
let KPIobject = new Map();
//object constructor
//function KPI(dateIn, ordersIn, precisionIn, faultsIn) {
//    this.dateID = dateIn;
//    this.orders = ordersIn;
//    this.precision = precisionIn;
//    this.faults = faultsIn;
//}

//use constructor for test values
//const test1 = new KPI(2003, 125, 65.50, 4);
//const test2 = new KPI(2005, 220, 85.50, 2);
//const test3 = new KPI(2004, 330, 75.50, 3);
//let testValueArr = [test1,test2,test3];

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

async function KPIExcelParse() {
    let KPIsource = await document.getElementById("KPIfile");
    await readXlsxFile(KPIsource.files[0]).then(function(rows) {
        //rows an array of rows
        //each row an array of cells
        KPIparsed = rows;
    })
    createObjectKeys();
    
}

function createObjectKeys() { //does nothing yet, except show top values
    let keysArray = KPIparsed[0]
    console.log("craaaarrrgh")
    console.log(keysArray)
    
    //KPIobject.set(keysArray); maybe keep for dynamic menu?
    console.log(KPIobject)
    console.log(KPIparsed.length)

    //loop times keyvalues
    for (keyNums=0; keyNums<keysArray.length; keyNums++) {
        console.log("Outer loop")
        KPIobject.set(keysArray[keyNums])
        let tempArray = [];
        KPIparsed.forEach(element => {
            tempArray.push(element[keyNums]);
        });
        console.log(tempArray)
    }
    console.log(KPIobject)
}





function calcTable() {
    KPIsource = document.getElementById("KPIfile");
    console.log(KPIsource);
    console.log(KPIsource[2])
    console.table(KPIsource)
}

//sort