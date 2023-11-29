let KPIparsed;
let KPIobject = new Map();
let keysArray;
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
    let test = document.getElementById("sortByOptions").value;
    let sortType = keysArray.indexOf(test);
    let highLow = document.getElementById("lowHighSelect").value;
    if (highLow === "highToLow") {
        KPIparsed.sort(function(a, b) {return b[sortType]-a[sortType]})
    }
    else if (highLow === "lowToHigh") {
        KPIparsed.sort(function(a, b) {return a[sortType]-b[sortType]})
    }
    console.table(KPIparsed);
    repopulateTable();
    //function(a, b), reverse with function(b, a)?
}

function repopulateTable() {
    let table = document.getElementById("KPITable");
    console.log(table.rows.length)
    for (row=0;row<(KPIparsed.length);row++) { 
        for (cell=0;cell<keysArray.length;cell++) {
            table.rows[row+1].cells[cell].innerHTML = KPIparsed[row][cell];
            //+1row to not overwrite headers
        }
    }
    console.log(table.rows.length)
}

async function KPIExcelParse() {
    let KPIsource = await document.getElementById("KPIfile");
    await readXlsxFile(KPIsource.files[0]).then(function(rows) {
        //rows an array of rows
        //each row an array of cells
        KPIparsed = rows;    
        keysArray = KPIparsed[0];
        KPIparsed.shift();
    })
    createSortOptions();
    createKPITable();
    //createObjectKeys();
    
}

function createSortOptions() {
    let optionList = document.getElementById("sortByOptions");
    optionList.innerHTML = "";
    for (i=0;i<keysArray.length;i++) {
        let newOption = keysArray[i];
        let temp = document.createElement("option");
        temp.textContent = newOption;
        temp.value = newOption;
        temp.id = keysArray[i]
        optionList.appendChild(temp)
    }
}

function createKPITable() {
    let table = document.getElementById("KPITable");
    table.innerHTML = "";
    let colHead = table.createTHead();
    let headRow = colHead.insertRow(0)
    for (i=0;i<keysArray.length;i++) {
        currentCell = headRow.insertCell(i)
        currentCell.innerHTML = keysArray[i]
        console.log("colHead")
    }
    for (i=0;i<KPIparsed.length;i++) {
        currentRow = table.insertRow(i+1)
        for (j=0;j<keysArray.length;j++) {
            currentCell = currentRow.insertCell(j);
            currentCell.innerHTML = KPIparsed[i][j];
        }
    }

}

/*function createObjectKeys() { //does nothing yet, except show top values

    console.log("craaaarrrgh")
    console.log(keysArray)
    
    //KPIobject.set(keysArray); maybe keep for dynamic menu?
    console.log(KPIobject)
    console.log(KPIparsed.length)

    //loop times keyvalues
    //for (keyNums=0; keyNums<keysArray.length; keyNums++) {
    //    console.log("Outer loop")
    //    let tempArray = [];
    //    KPIparsed.forEach(element => {
    //        tempArray.push(element[keyNums]);
    //        //KPIobject.keysArray[keyNums].push(element[keyNums])
    //    });
    //    KPIobject.set(keysArray[keyNums], tempArray)
    //    console.log(tempArray)
    //}
    //console.log(KPIobject)
}*/





function calcTable() {
    KPIsource = document.getElementById("KPIfile");
    console.log(KPIsource);
    console.log(KPIsource[2])
    console.table(KPIsource)
}

//sort