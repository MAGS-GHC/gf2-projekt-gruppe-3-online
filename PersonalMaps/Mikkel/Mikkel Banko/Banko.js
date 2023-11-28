// Counts Empty fields functions
function countEmptyFields() {
    let emptyFieldCount = 0;

    for (let i = 0; i <= 8; i++) {
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

    for (let i = 0; i <= 8; i++) {
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

    for (let i = 0; i <= 8; i++) {
        let elementId = "r2c" + i;
        let fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {
            emptyFieldCount++;
        }
}

    return emptyFieldCount;
}
    
function bankoRow() {

let loopOnOff = 0;

do {

    //Clear all inputs
    for (let i = 0; i <= 8; i++) {
        let elementId = "r0c" + i;
        document.getElementById(elementId).value = "";
    }
   
    let randomNumbersArray = [];
   

    for (let i = 0; i < 5; i++) {
        let randomNumber;


        // udtager random tal og tjekker at alle numre er unikke
        do {
            randomNumber = Math.floor(Math.random() * 90) + 1;
        } while (randomNumbersArray.includes(randomNumber)); //includes er sand hvis random number findes i arrayet

        randomNumbersArray.push(randomNumber);
    }

    console.log(randomNumbersArray);

    for (let t = 0; t < 5; t++) {

    for (let i = 0; i < 9; i++) {
        let low = i * 10;
        let high = low + 9
    
        if (high === 89){
        high = 90; }

        if (randomNumbersArray[t] >= low && randomNumbersArray[t] <= high) {
            document.getElementById(`r0c${i}`).value = randomNumbersArray[t];
           
        }
    }

 }if (countEmptyFields() <= 4) {
    loopOnOff = 1;
    
    }
} while (loopOnOff === 0);
}





function bankoRow1() {

    let loopOnOff = 0;
    
    do {
    
        //Clear all inputs
        for (let i = 0; i <= 8; i++) {
            let elementId = "r1c" + i;
            document.getElementById(elementId).value = "";
        }
       
        let randomNumbersArray = [];
       
    
        for (let i = 0; i < 5; i++) {
            let randomNumber;
    
    
            // udtager random tal og tjekker at alle numre er unikke
            do {
                randomNumber = Math.floor(Math.random() * 90) + 1;
            } while (randomNumbersArray.includes(randomNumber)); //includes er sand hvis random number findes i arrayet
    
            randomNumbersArray.push(randomNumber);
        }
    
        console.log(randomNumbersArray);
    
        for (let t = 0; t < 5; t++) {
    
        for (let i = 0; i < 9; i++) {
            let low = i * 10;
            let high = low + 9
        
            if (high === 89){
            high = 90; }
    
            if (randomNumbersArray[t] >= low && randomNumbersArray[t] <= high) {
                document.getElementById(`r1c${i}`).value = randomNumbersArray[t];
               
            }
        }
    
     }if (countEmptyFields1() <= 4) {
        loopOnOff = 1;
        
        }
    } while (loopOnOff === 0);
    }

    function bankoRow2() {

        let loopOnOff = 0;
        
        do {
        
            //Clear all inputs
            for (let i = 0; i <= 8; i++) {
                let elementId = "r2c" + i;
                document.getElementById(elementId).value = "";
            }
           
            let randomNumbersArray = [];
           
        
            for (let i = 0; i < 5; i++) {
                let randomNumber;
        
        
                // udtager random tal og tjekker at alle numre er unikke
                do {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                } while (randomNumbersArray.includes(randomNumber)); //includes er sand hvis random number findes i arrayet
        
                randomNumbersArray.push(randomNumber);
            }
        
            console.log(randomNumbersArray);
        
            for (let t = 0; t < 5; t++) {
        
            for (let i = 0; i < 9; i++) {
                let low = i * 10;
                let high = low + 9
            
                if (high === 89){
                high = 90; }
        
                if (randomNumbersArray[t] >= low && randomNumbersArray[t] <= high) {
                    document.getElementById(`r2c${i}`).value = randomNumbersArray[t];
                   
                }
            }
        
         }if (countEmptyFields2() <= 4) {
            loopOnOff = 1;
            
            }
        } while (loopOnOff === 0);
        }