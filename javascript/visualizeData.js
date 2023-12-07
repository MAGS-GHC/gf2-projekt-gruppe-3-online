let KPIparsed; 
let keysArray; 

async function KPIExcelParse() {
    let KPIsource = await document.getElementById("KPIfile");
    await readXlsxFile(KPIsource.files[0]).then(function(rows) {
        KPIparsed = rows;    
        keysArray = KPIparsed[0];
        KPIparsed.shift();
    })
    createSortOptions();
    createKPITable();
}

function createSortOptions() {
    let optionList = document.getElementById("sortByOptions");
    sortAppends("x: ")
    optionList = document.getElementById("yAxis");
    sortAppends("y: ")

    function sortAppends(idName) {
        optionList.innerHTML = "";
        for (i=0;i<keysArray.length;i++) {
            let newOption = keysArray[i];
            let temp = document.createElement("option");
            temp.textContent = newOption;
            temp.value = newOption;
            temp.id = idName + keysArray[i]
            optionList.appendChild(temp)
        }
    }
}

function createKPITable() {
    let table = document.getElementById("KPITable");
    table.innerHTML = "";
    let colHead = table.createTHead();
    let headRow = colHead.insertRow(0);
    let meanModeRow = colHead.insertRow(1);
    for (header=0;header<keysArray.length;header++) {
        let currentCell = headRow.insertCell(header)
        currentCell.innerHTML = keysArray[header]
        currentCell = meanModeRow.insertCell(header)
        currentCell.innerHTML = calcMeanMedian(header);
    }
    for (i=0;i<KPIparsed.length;i++) {
        let currentRow = table.insertRow(i+2)
        for (j=0;j<keysArray.length;j++) {
            let currentCell = currentRow.insertCell(j);
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

    let tempArray = [];
    KPIparsed.forEach(element => {
        tempArray.push(element[index])
    });
    for (let leftVal=0;leftVal<tempArray.length;leftVal++) {
        for (let rightVal=leftVal; rightVal<tempArray.length;rightVal++) {
            if (tempArray[rightVal] < tempArray[(leftVal)]) {
                let temp = tempArray[leftVal];
                tempArray[leftVal] = tempArray[rightVal];
                tempArray[rightVal] = temp;
            }
        }
    }
    let median;
    if (tempArray.length % 2 === 0) {
        median = (tempArray[tempArray.length/2] + tempArray[tempArray.length/2-1]) / 2;
    }
    else {
        median = tempArray[Math.floor(tempArray.length/2)]
    }
    return "Mean: " + Math.round(mean*100)/100 + ", Median: " + Math.round(median*100)/100;
}

function sortBy() {
    let selectedOption = document.getElementById("sortByOptions").value;
    sortFunction(KPIparsed, keysArray.indexOf(selectedOption));
    repopulateTable();
    simplePlotDisplay()
}

function sortFunction(arrayToSort, sortIndex) {
    let highLow = document.getElementById("lowHighSelect").value;
    for (let leftVal=0;leftVal<arrayToSort.length;leftVal++) {
        for (let rightVal=leftVal; rightVal<arrayToSort.length;rightVal++) {
            if ((arrayToSort[rightVal][sortIndex] < arrayToSort[(leftVal)][sortIndex] && highLow == "lowToHigh") || (arrayToSort[rightVal][sortIndex] > arrayToSort[(leftVal)][sortIndex] && highLow == "highToLow")) {
                let temp = arrayToSort[rightVal];
                arrayToSort[rightVal] = arrayToSort[leftVal];
                arrayToSort[leftVal] = temp;
            }
        }
    }
}

function repopulateTable() {
    let table = document.getElementById("KPITable");
    for (row=0;row<(KPIparsed.length);row++) { 
        for (cell=0;cell<keysArray.length;cell++) {
            table.rows[row+2].cells[cell].innerHTML = KPIparsed[row][cell];
        }
    }
}

function simplePlotDisplay() {
    document.querySelector("#canvasDiv").innerHTML = '<canvas id="myChart"></canvas>';
    let xTemp = keysArray.indexOf(document.getElementById("sortByOptions").value);
    let yTemp = keysArray.indexOf(document.getElementById("yAxis").value);
    let xAxis = [];
    let yAxis = [];
    let dataSet = [];
    switch (document.getElementById("graphType").value) {
        case "line":
            for (i=0;i<KPIparsed.length;i++) {
                xAxis.push(KPIparsed[i][xTemp])
                yAxis.push(KPIparsed[i][yTemp])
            }
            new Chart("myChart", {
                type: document.getElementById("graphType").value,
                data: {
                    labels: xAxis,
                  datasets: [{
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: yAxis
                  }]
                },
                options: {
                  legend: {display: false}
                }
              })
              break;
        case "scatter":
            for (i=0;i<KPIparsed.length;i++) {
                dataSet.push({x:KPIparsed[i][xTemp],y:KPIparsed[i][yTemp]})
            }
            new Chart("myChart", {
                type: document.getElementById("graphType").value,
                data: {
                  datasets: [{
                    pointBackgroundColor: "rgb(0,0,255)",
                    data: dataSet
                  }]
                },
                options: {
                  legend: {display: false}
                }
              });
    }
}