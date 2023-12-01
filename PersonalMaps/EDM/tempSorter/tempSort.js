let sampleArray = [218,231,292,140,199,268,276,103,46,119,72,82,38,275,30,75,150,34,98,250,161,54,60,110,123,44,54,233,244,213,154,77,292,246,175,82,164,278,44,105,279,128,187,235,252,71,158,215,253,96,168,267,94,269,98,65,93,154,284,240,191,87,92,214,236,83,145,259,167,197,53,268,78,225,186,261,78,175,30,253,251,189,82,46,253,67,292,168,239,292,206,100,228,265,154,201,185,244,218,178,64,118,48,158,86,54,102,41,206,247,224,198,44,175,286,241,111,71,192,205,214,139];
let sampleArray2 = [3,0,1,0,0,0,0,0,1,0,2,0,1,0,0,1,0,4,0,0,0,0,1,0,0,5,0,0,1,0,0,0,1,0,1,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,2,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0]
let testArray = sampleArray;
//equal to first column
let sortedArray = [];

document.getElementById("outputField").innerText = "test"

function builtinMethod() {//runs 684 times;
    testArray.sort(function(a, b) {console.log("built-in .sort method"); return a-b; })
    update();
}

function pushHighRight() { //runs 14884 times;
for (j=0;j<testArray.length;j++) { //run once per value
for (i=0;i<testArray.length;i++){ //run check against each value
    console.log("simple looped check")
    if (testArray[i] > testArray[i+1]) {
        let temp = testArray[i+1];
        testArray[i+1] = testArray[i];
        testArray[i] = temp;
    }
}
}
update();
}

function pushHighRight2() { //runs 7503 times;
    for (j=0;j<testArray.length;j++) { 
    for (i=0;i<testArray.length-j;i++){ //reduce length of check; last high value is already pushed to end
        console.log("simple looped check")
        if (testArray[i] > testArray[i+1]) {
            let temp = testArray[i+1];
            testArray[i+1] = testArray[i];
            testArray[i] = temp;
        }
    }
    }
    update();
    }

function findLowest() { //runs 7503 times
    for (i=0;i<testArray.length;i++) {
        for (j=i; j<testArray.length;j++) {
            if (testArray[i] > testArray[j]) {
                let temp = testArray[j];
                testArray[j] = testArray[i];
                testArray[i] = temp;
            }
            console.log("findLow check")
        }
    }
    update();
}

function update() {
    document.getElementById("outputField").innerText = testArray
    testArray = sampleArray;
}

let constructArray = [];
function x() {
    constructArray.push(testArray[0]);
    testArray.shift()
    testArray.forEach(element => {
    })
}

document.getElementById("outputField").innerText = testArray



function simplePlotDisplay() {
    const data = [{
    x: sampleArray,
    y: sampleArray2,
    mode: "markers",
    type: "scatter"
}]
const layout = {
    xaxis: {range: [0, 300], title: "Square Meters"},
    yaxis: {range: [0, 5], title: "Price in Millions"},
    title: "House Prices vs Size"
  };
  // Display using Plotly
Plotly.newPlot("myPlot", data, layout);
}