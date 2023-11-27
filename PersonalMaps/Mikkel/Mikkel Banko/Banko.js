
function bankoCard() {
    let randomNumbersArray = [];

    for (let i = 0; i < 15; i++) {
        let randomNumber;

        do {
            randomNumber = Math.floor(Math.random() * 90) + 1;
        } while (randomNumbersArray.includes(randomNumber));

        randomNumbersArray.push(randomNumber);
    }

    console.log(randomNumbersArray);

    if (randomNumbersArray[0] < 10) {
        document.getElementById("r0c0").value = randomNumbersArray[0];
    } else if (randomNumbersArray[0] > 10 && randomNumbersArray[0] <= 19) {
        document.getElementById("r0c1").value = randomNumbersArray[0];
    } else if (randomNumbersArray[0] > 19 && randomNumbersArray[0] <= 29) {
        document.getElementById("r0c2").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 29 && randomNumbersArray[0] <= 39) {
        document.getElementById("r0c3").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 39 && randomNumbersArray[0] <= 49) {
        document.getElementById("r0c4").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 49 && randomNumbersArray[0] <= 59) {
        document.getElementById("r0c5").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 59 && randomNumbersArray[0] <= 69) {
        document.getElementById("r0c6").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 69 && randomNumbersArray[0] <= 79) {
        document.getElementById("r0c7").value = randomNumbersArray[0];
    }else if (randomNumbersArray[0] > 79 && randomNumbersArray[0] <= 90) {
        document.getElementById("r0c8").value = randomNumbersArray[0];
} }


//Sørg for det ikke er samme tal

//Kontrol 1 af at der ikke kommer 2 i samme felt


// Ingen  rows må være tomme

//Hvis der er noget i input field start funktion forfra