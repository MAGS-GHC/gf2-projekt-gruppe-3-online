let KPIparsed;
let KPIobject = new Map();
let keysArray;

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
            table.rows[row+2].cells[cell].innerHTML = KPIparsed[row][cell];
            //+2row to not overwrite headers
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
    let headRow = colHead.insertRow(0);
    let meanModeRow = colHead.insertRow(1);
    for (i=0;i<keysArray.length;i++) {
        currentCell = headRow.insertCell(i)
        currentCell.innerHTML = keysArray[i]
        currentCell = meanModeRow.insertCell(i)
        currentCell.innerHTML = calcMeanMedian(i);
        console.log("colHead")
    }
    for (i=0;i<KPIparsed.length;i++) {
        currentRow = table.insertRow(i+2)
        for (j=0;j<keysArray.length;j++) {
            currentCell = currentRow.insertCell(j);
            currentCell.innerHTML = KPIparsed[i][j];
        }
    }

}


function calcMeanMedian(index) {
    let tempSum = 0;
    KPIparsed.forEach(element => {
        tempSum += element[index];
    });
    let mean = tempSum / KPIparsed.length;
    console.log(mean)

    let tempArray = [];
    KPIparsed.forEach(element => {
        tempArray.push(element[index])
    });
    tempArray.sort(function(a, b) {return b-a})
    //tempArray sorted
    let median;
    if (tempArray.length % 2 === 0) {
        median = (tempArray[tempArray.length/2] + tempArray[tempArray.length/2-1]) / 2;
    }
    else {
        median = tempArray[Math.floor(tempArray.length/2)]
    }
    console.log(median)
    console.log(tempArray)
    console.log((tempArray.length/2))
    return "Mean: " + Math.round(mean*100)/100 + "\nMedian: " + Math.round(median*100)/100;
}






function calcTable() {
    KPIsource = document.getElementById("KPIfile");
    console.log(KPIsource);
    console.log(KPIsource[2])
    console.table(KPIsource)
}

//sort