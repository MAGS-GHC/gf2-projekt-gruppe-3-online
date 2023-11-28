function bankoRow1() {

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

        do {
            randomNumber = Math.floor(Math.random() * 90) + 1;
        } while (randomNumbersArray.includes(randomNumber));

        randomNumbersArray.push(randomNumber);
    }

    console.log(randomNumbersArray);

    for (let t = 0; t < 5; t++) {

    for (let i = 0; i < 9; i++) {
        let low = i * 10;
        let high = low + 9
    
        if (randomNumbersArray[t] >= low && randomNumbersArray[t] <= high) {
            document.getElementById(`r0c${i}`).value = randomNumbersArray[t];
           
        }if (high === 89){
            high = 90;
        }
      
    }

 }if (countEmptyFields1() <= 4) {
    loopOnOff = 1;
    
    }
} while (loopOnOff === 0);
}


// Counts Empty fields
function countEmptyFields1() {
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




//Sørg for det ikke er samme tal

//Kontrol 1 af at der ikke kommer 2 i samme felt


// Ingen  rows må være tomme

//Hvis der er noget i input field start funktion forfra