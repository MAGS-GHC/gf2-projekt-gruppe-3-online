function bankoCard() {

     
      
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
  

} if (randomNumbersArray[1] < 10) {
    document.getElementById("r0c0").value = randomNumbersArray[1];
} else if (randomNumbersArray[1] > 10 && randomNumbersArray[1] <= 19) {
    document.getElementById("r0c1").value = randomNumbersArray[1];
} else if (randomNumbersArray[1] > 19 && randomNumbersArray[1] <= 29) {
    document.getElementById("r0c2").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 29 && randomNumbersArray[1] <= 39) {
    document.getElementById("r0c3").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 39 && randomNumbersArray[1] <= 49) {
    document.getElementById("r0c4").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 49 && randomNumbersArray[1] <= 59) {
    document.getElementById("r0c5").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 59 && randomNumbersArray[1] <= 69) {
    document.getElementById("r0c6").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 69 && randomNumbersArray[1] <= 79) {
    document.getElementById("r0c7").value = randomNumbersArray[1];
}else if (randomNumbersArray[1] > 79 && randomNumbersArray[1] <= 90) {
    document.getElementById("r0c8").value = randomNumbersArray[1];

}if (randomNumbersArray[2] < 10) {
        document.getElementById("r0c0").value = randomNumbersArray[2];
    } else if (randomNumbersArray[2] > 10 && randomNumbersArray[2] <= 19) {
        document.getElementById("r0c1").value = randomNumbersArray[2];
    } else if (randomNumbersArray[2] > 19 && randomNumbersArray[2] <= 29) {
        document.getElementById("r0c2").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 29 && randomNumbersArray[2] <= 39) {
        document.getElementById("r0c3").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 39 && randomNumbersArray[2] <= 49) {
        document.getElementById("r0c4").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 49 && randomNumbersArray[2] <= 59) {
        document.getElementById("r0c5").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 59 && randomNumbersArray[2] <= 69) {
        document.getElementById("r0c6").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 69 && randomNumbersArray[2] <= 79) {
        document.getElementById("r0c7").value = randomNumbersArray[2];
    }else if (randomNumbersArray[2] > 79 && randomNumbersArray[2] <= 90) {
        document.getElementById("r0c8").value = randomNumbersArray[2];

    }if (randomNumbersArray[3] < 10) {
        document.getElementById("r0c0").value = randomNumbersArray[3];
    } else if (randomNumbersArray[3] > 10 && randomNumbersArray[3] <= 19) {
        document.getElementById("r0c1").value = randomNumbersArray[3];
    } else if (randomNumbersArray[3] > 19 && randomNumbersArray[3] <= 29) {
        document.getElementById("r0c2").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 29 && randomNumbersArray[3] <= 39) {
        document.getElementById("r0c3").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 39 && randomNumbersArray[3] <= 49) {
        document.getElementById("r0c4").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 49 && randomNumbersArray[3] <= 59) {
        document.getElementById("r0c5").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 59 && randomNumbersArray[3] <= 69) {
        document.getElementById("r0c6").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 69 && randomNumbersArray[3] <= 79) {
        document.getElementById("r0c7").value = randomNumbersArray[3];
    }else if (randomNumbersArray[3] > 79 && randomNumbersArray[3] <= 90) {
        document.getElementById("r0c8").value = randomNumbersArray[3];

    }if (randomNumbersArray[4] < 10) {
        document.getElementById("r0c0").value = randomNumbersArray[4];
    } else if (randomNumbersArray[4] > 10 && randomNumbersArray[4] <= 19) {
        document.getElementById("r0c1").value = randomNumbersArray[4];
    } else if (randomNumbersArray[4] > 19 && randomNumbersArray[4] <= 29) {
        document.getElementById("r0c2").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 29 && randomNumbersArray[4] <= 39) {
        document.getElementById("r0c3").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 39 && randomNumbersArray[4] <= 49) {
        document.getElementById("r0c4").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 49 && randomNumbersArray[4] <= 59) {
        document.getElementById("r0c5").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 59 && randomNumbersArray[4] <= 69) {
        document.getElementById("r0c6").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 69 && randomNumbersArray[4] <= 79) {
        document.getElementById("r0c7").value = randomNumbersArray[4];
    }else if (randomNumbersArray[4] > 79 && randomNumbersArray[4] <= 90) {
        document.getElementById("r0c8").value = randomNumbersArray[4];

    }if (countEmptyFields1() <= 4) {
    loopOnOff = 1;
    
    }
} while (loopOnOff === 0);
}




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