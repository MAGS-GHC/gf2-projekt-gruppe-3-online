let KPIparsed; //contains parsed KPI, array (length) of array (categories)
let keysArray; //contains category names, cut from KPIparsed
let rangeOf = []; //contains range of category values, max to min, for graph

function sortBy() {
    let test = document.getElementById("sortByOptions").value;
    //let sortType = keysArray.indexOf(test);
    /*if (highLow === "highToLow") {
        KPIparsed.sort(function(a, b) {return b[sortType]-a[sortType]})
    }
    else if (highLow === "lowToHigh") {
        KPIparsed.sort(function(a, b) {return a[sortType]-b[sortType]})
    }*/
    sortFunction(keysArray.indexOf(test));
    console.table(KPIparsed);
    repopulateTable();
    simplePlotDisplay()
    //function(a, b), reverse with function(b, a)?
}

function sortFunction(sortType) {
    let highLow = document.getElementById("lowHighSelect").value;
    switch (highLow) {
        case "lowToHigh":
            for (i=0;i<KPIparsed.length;i++) {
                for (j=i; j<(KPIparsed.length-i);j++) {
                    if (KPIparsed[i][sortType] > KPIparsed[j][sortType]) {
                        let temp = KPIparsed[j];
                        KPIparsed[j] = KPIparsed[i];
                        KPIparsed[i] = temp;
                    }
                }
            }
            break;
        case "highToLow":
            for (i=0;i<KPIparsed.length;i++) {
                for (j=i; j<(KPIparsed.length-i);j++) {
                    if (KPIparsed[i][sortType] < KPIparsed[j][sortType]) {
                        let temp = KPIparsed[j];
                        KPIparsed[j] = KPIparsed[i];
                        KPIparsed[i] = temp;
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