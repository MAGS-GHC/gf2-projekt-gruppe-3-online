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

function createSortOptions() { //improve, reduce repetition
    let optionList = document.getElementById("sortByOptions");
    optionList.innerHTML = "";
    for (i=0;i<keysArray.length;i++) {
        let newOption = keysArray[i];
        let temp = document.createElement("option");
        temp.textContent = newOption;
        temp.value = newOption;
        temp.id = "x: " + keysArray[i]
        optionList.appendChild(temp)
    }
    
    optionList = document.getElementById("yAxis");
    optionList.innerHTML = "";
    for (i=0;i<keysArray.length;i++) {
        let newOption = keysArray[i];
        let temp = document.createElement("option");
        temp.textContent = newOption;
        temp.value = newOption;
        temp.id = "y: " + keysArray[i]
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
        let currentCell = headRow.insertCell(i)
        currentCell.innerHTML = keysArray[i]
        currentCell = meanModeRow.insertCell(i)
        currentCell.innerHTML = calcMeanMedian(i);
    }
    for (i=0;i<KPIparsed.length;i++) {
        let currentRow = table.insertRow(i+2)
        for (j=0;j<keysArray.length;j++) {
            let currentCell = currentRow.insertCell(j);
            currentCell.innerHTML = KPIparsed[i][j];
        }
    }
}

function sortBy() {
    let selectedOption = document.getElementById("sortByOptions").value;
    sortFunction(keysArray.indexOf(selectedOption));
    console.table(KPIparsed);
    repopulateTable();
    simplePlotDisplay()
}

function sortFunction(sortType) {
    let highLow = document.getElementById("lowHighSelect").value;
    switch (highLow) {
        case "lowToHigh":
            for (i=0;i<KPIparsed.length;i++) {
                for (j=0; j<KPIparsed.length;j++) {
                    if (KPIparsed[j][sortType] > KPIparsed[(i)][sortType]) {
                        let temp = KPIparsed[i];
                        KPIparsed[i] = KPIparsed[j];
                        KPIparsed[j] = temp;
                    }
                }
            }
            break;
        case "highToLow":
            for (i=0;i<KPIparsed.length;i++) {
                for (j=0; j<KPIparsed.length;j++) {
                    if (KPIparsed[j][sortType] < KPIparsed[(i)][sortType]) {
                        let temp = KPIparsed[i];
                        KPIparsed[i] = KPIparsed[j];
                        KPIparsed[j] = temp;
                    }
                }
            }
            break;
    }
    
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
    tempArray.sort(function(a, b) {return a-b})
    //tempArray sorted
    let median;
    if (tempArray.length % 2 === 0) {
        median = (tempArray[tempArray.length/2] + tempArray[tempArray.length/2-1]) / 2;
    }
    else {
        median = tempArray[Math.floor(tempArray.length/2)]
    }
    rangeOf.push([tempArray[0],tempArray[tempArray.length-1]])
    return "Mean: " + Math.round(mean*100)/100 + "\nMedian: " + Math.round(median*100)/100;
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




//sort