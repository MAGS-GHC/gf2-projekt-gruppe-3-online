let randomNumbersArray0;
let randomNumbersArray1;
let randomNumbersArray2;

// Counts Empty fields functions x 3
function countEmptyFields() {
    let emptyFieldCount = 0;

    for (let i = 0; i < 9; i++) {
        let elementId = "r0c" + i;
        let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
    }

    return emptyFieldCount;
}

function countEmptyFields1() {
    let emptyFieldCount = 0;

    for (let i = 0; i < 9; i++) {
        let elementId = "r1c" + i;
        let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
    }

    return emptyFieldCount;
}

function countEmptyFields2() {
    let emptyFieldCount = 0;

    for (let i = 0; i < 9; i++) {
        let elementId = "r2c" + i;
        let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
}

    return emptyFieldCount;
}
    

// BANKOROW 0
function bankoRow() {

let loopOnOff = 0;

do {

    //Clear all inputs
    for (let i = 0; i < 9; i++) {
        let elementId = "r0c" + i;
        document.getElementById(elementId).value = "";
    }
   
    randomNumbersArray0 = [];
   

    for (let i = 0; i < 5; i++) {
        let randomNumber;


        // udtager random tal og tjekker at alle numre er unikke
        do {
            randomNumber = Math.floor(Math.random() * 90) + 1;
        } while (randomNumbersArray0.includes(randomNumber)); //includes er sand hvis random number findes i arrayet

        randomNumbersArray0.push(randomNumber);
    }

    console.log(randomNumbersArray0);

    for (let t = 0; t < 5; t++) {

    for (let i = 0; i < 9; i++) {
        let low = i * 10;
        let high = low + 9
    
        if (high === 89){
        high = 90; }

        if (randomNumbersArray0[t] >= low && randomNumbersArray0[t] <= high) {
            document.getElementById(`r0c${i}`).value = randomNumbersArray0[t];
           
        }
    }

 }if (countEmptyFields() <= 4) {
    loopOnOff = 1;
    
    }
} while (loopOnOff === 0);
}


// BANKO-ROW 1


function bankoRow1() {

    let loopOnOff = 0;
    
    do {
    
        //Clear all inputs
        for (let i = 0; i < 9; i++) {
            let elementId = "r1c" + i;
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
    
        console.log(randomNumbersArray1);
    
        for (let t = 0; t < 5; t++) {
    
        for (let i = 0; i < 9; i++) {
            let low = i * 10;
            let high = low + 9
        
            if (high === 89){
            high = 90; }
    
            if (randomNumbersArray1[t] >= low && randomNumbersArray1[t] <= high) {
                document.getElementById(`r1c${i}`).value = randomNumbersArray1[t];
               
            }
        }
    
     }if (countEmptyFields1() <= 4) {
        loopOnOff = 1;
        
        }
    } while (loopOnOff === 0);
    }

// BANKO ROW 2

    function bankoRow2() {
do {
    

        let loopOnOff = 0;
        
       
        do {
        
            //Clear all inputs
            for (let i = 0; i < 9; i++) {
                let elementId = "r2c" + i;
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
                    document.getElementById(`r2c${i}`).value = randomNumbersArray2[t];
                   
                }
            }
        
         }if (countEmptyFields2() <= 4) {
            loopOnOff = 1;
            
            }
        } while (loopOnOff === 0);
        
    }while (checkEmptyColumn() > 0);
} 

        //EMPTY COLUMN FUNCTION
        
        function checkEmptyColumn(){
           let columnError = 0;

           for(let c = 0; c < 9; c++){
            if(checkRuleColumn(c) > 2){
                columnError = columnError + 1;
         
            } 
        } 
        
        console.log(columnError); 
        return columnError;
    
    }
        
  
       
// LOOP IN ROW
function checkRuleColumn(col) {
    let emptyFieldCount = 0;
    for(let row = 0; row < 3; row++){
    
        let elementId = "r" + row + "c" + col;
            let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
   
}
    return emptyFieldCount;
}




