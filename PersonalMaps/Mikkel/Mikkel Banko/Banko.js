let randomNumbersArray0;
let randomNumbersArray1;
let randomNumbersArray2;

let bankocard;



function banko(){

    
    //bankocard 0 udfyldes
    bankocard = "bc0";
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns();

    //bankocard 1 udfyldes
    bankocard = "bc1";
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns();

    //bankocard 2 udfyldes
    bankocard = "bc2"
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns(); 
    
}


// BANKO-ROW 0
function bankoRow0() {


//console.log(bankocard);

do {

    //Clear all inputs
    for (let i = 0; i < 9; i++) {
        let elementId = bankocard + "r0c" + i;
        document.getElementById(elementId).value = "";
    }
   
    randomNumbersArray0 = [];
   // console.log(bankocard);

    for (let i = 0; i < 5; i++) {
        let randomNumber;


        // udtager random tal og tjekker at alle numre er unikke
        do {
            randomNumber = Math.floor(Math.random() * 90) + 1;
        } while (randomNumbersArray0.includes(randomNumber)); //includes er sand hvis random number findes i arrayet

        randomNumbersArray0.push(randomNumber);
    }

    //console.log(randomNumbersArray0);

    for (let t = 0; t < 5; t++) {

    for (let i = 0; i < 9; i++) {
        let low = i * 10;
        let high = low + 9
    
        if (high === 89){
        high = 90; }

        if (randomNumbersArray0[t] >= low && randomNumbersArray0[t] <= high) {
            elementId = bankocard + "r0c" + i;
            document.getElementById(elementId).value = randomNumbersArray0[t];
           
        }
    }
    //console.log(bankocard);
 }

} while (countEmptyFields(0) > 4);
}


// BANKO-ROW 1


function bankoRow1() {

    
    
    do {
    
        //Clear all inputs
        for (let i = 0; i < 9; i++) {
            let elementId = bankocard + "r1c" + i;
        console.log(elementId);
            document.getElementById(elementId).value = "";
        
        }
       
        randomNumbersArray1 = [];
       
    
        for (let i = 0; i < 5; i++) {
            let randomNumber;
    
    
            // udtager random tal og tjekker at alle numre er unikke
            do {
                randomNumber = Math.floor(Math.random() * 90) + 1;
            } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber)); //includes er sand hvis random number findes i arrayet
    
            randomNumbersArray1.push(randomNumber);
        }
    
        //console.log(randomNumbersArray1);
    
        for (let t = 0; t < 5; t++) {
    
        for (let i = 0; i < 9; i++) {
            let low = i * 10;
            let high = low + 9
        
            if (high === 89){
            high = 90; }
    
            if (randomNumbersArray1[t] >= low && randomNumbersArray1[t] <= high) {
                elementId = bankocard + "r1c" + i;
                document.getElementById(elementId).value = randomNumbersArray1[t];
               
            }
        } //console.log(bankocard);
    
     }
    
    } while (countEmptyFields(1) > 4);
    }

// BANKO-ROW 2

    function bankoRow2() {
do {
    
       
        do {
        
            //Clear all inputs
            for (let i = 0; i < 9; i++) {
                let elementId = bankocard + "r2c" + i;
                document.getElementById(elementId).value = "";
            }
           
            randomNumbersArray2 = [];
           
        
            for (let i = 0; i < 5; i++) {
                let randomNumber;
        
        
                // udtager random tal og tjekker at alle numre er unikke
                do {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber) || randomNumbersArray2.includes(randomNumber));
        
                randomNumbersArray2.push(randomNumber);
            }
        
            console.log(randomNumbersArray2);
        
            for (let t = 0; t < 5; t++) {
        
            for (let i = 0; i < 9; i++) {
                let low = i * 10;
                let high = low + 9
            
                if (high === 89){
                high = 90; }
        
                if (randomNumbersArray2[t] >= low && randomNumbersArray2[t] <= high) {
                    elementId = bankocard + "r2c" + i;
                    document.getElementById(elementId).value = randomNumbersArray2[t];
                   
                }
            }
        
         }
         
        } while (countEmptyFields(2) > 4);
        
    }while (checkEmptyColumn() > 0);
} 

 //EMPTY COLUMN FUNCTION
        
        function checkEmptyColumn(){
           let columnError = 0;

           for(let c = 0; c < 9; c++){
            if(checkRuleColumn(c) > 2){
                columnError++;
         
            } 
        } 
        
        console.log(columnError); 
        return columnError;
    
    }
        
  
       
// LOOP IN ROW
function checkRuleColumn(col) {
    let emptyFieldCount = 0;
    for(let row = 0; row < 3; row++){
    
        let elementId = bankocard + "r" + row + "c" + col;
            let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
   
}
    return emptyFieldCount;
}



// Counts Empty fields functions
function countEmptyFields(row) {
    let emptyFieldCount = 0;

    for (let i = 0; i < 9; i++) {
        let elementId = bankocard + "r" + row + "c" + i;
        let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
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
   
function sortColumn(col){ //Lav det enklere

    let arrayColumn = [];
    
    let elementId = bankocard + "r0c" + col;
    console.log(elementId);
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
    
    //console.log(emptyFieldCount);
    
    
    if(emptyFieldCount === 0){

        //console.log(arrayColumn);

        arrayColumn.sort();
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

   //if emptyFieldCount === 2 do nothing
    //console.log(arrayColumn);
   elementId = bankocard + "r0c" + col;
    document.getElementById(elementId).value = arrayColumn[0];
   elementId = bankocard + "r1c" + col;
    document.getElementById(elementId).value = arrayColumn[1];
    elementId = bankocard + "r2c" + col;
    document.getElementById(elementId).value = arrayColumn[2];
}


