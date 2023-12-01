// Counts Empty fields functions
function countEmptyFields(row) {
    emptyFieldCount = 0

    for (let i = 0; i < 9; i++) {
        elementId = bankocard + "r" + row + "c" + i;     // elementId er en pegepind til container input
        fieldValue = document.getElementById(elementId).value; 

        if (fieldValue === "") { emptyFieldCount++;}
    }
return emptyFieldCount;
} 


//EMPTY COLUMN FUNCTION
        
function checkEmptyColumn(){
    columnError = 0

    for(let c = 0; c < 9; c++){
        if(checkRuleColumn(c) > 2){columnError++;} 
    } 

return columnError;
}
    
// LOOP IN ROW
function checkRuleColumn(col) {
    emptyFieldCount = 0
    for(let row = 0; row < 3; row++){

        elementId = bankocard + "r" + row + "c" + col;
        fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {emptyFieldCount++;}

    }
return emptyFieldCount;
}





// SORT OF ALL COLUMN FUNCTION

function sortAllColumns(){

for(let i = 0; i < 9; i++){
sortColumn(i);
}

}

// SORT OF 1 COLUMN FUNCTION

function sortColumn(col){ 

arrayColumn = []

elementId = bankocard + "r0c" + col;
arrayColumn[0] = document.getElementById(elementId).value;

elementId = bankocard + "r1c" + col;
arrayColumn[1] = document.getElementById(elementId).value;

elementId = bankocard + "r2c" + col;
arrayColumn[2] = document.getElementById(elementId).value;



let emptyFieldCount = 0;
for(let i = 0; i < 3; i++){
    
    if(arrayColumn[i] === ""){
        emptyFieldCount++;
    }
   
}

if(emptyFieldCount === 0){


arrayColumn.sort(); // Hvis o tomme felter sorterer vi bare de 3 tal
} 

//if emptyFieldCount === 2 do nothing

if(emptyFieldCount === 1){
    if (arrayColumn[0] === ""){
        arrayColumn.sort()
    }
    if(arrayColumn[1] === ""){
        if(arrayColumn[0] > arrayColumn [2]){
            let x = arrayColumn[0];
            arrayColumn[0] = arrayColumn[2];
            arrayColumn[2] = x 
        }}
   if (arrayColumn[2] === "") {
       if (arrayColumn[0] > arrayColumn[1]) {
        let x = arrayColumn[0];
        arrayColumn[0] = arrayColumn[1];
        arrayColumn[1] = x;
        }  
    }    
}


elementId = bankocard + "r0c" + col;
document.getElementById(elementId).value = arrayColumn[0];

elementId = bankocard + "r1c" + col;
document.getElementById(elementId).value = arrayColumn[1];

elementId = bankocard + "r2c" + col;
document.getElementById(elementId).value = arrayColumn[2];
}


