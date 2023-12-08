
//Erklæring af globale variabler som anvendes på tværs af alle funktioner
let randomNumbersArray0;
let randomNumbersArray1;
let randomNumbersArray2;

let bankocard; //anvendes som global pegepind til container input



function banko(){

    
    //bankocard 0 udfyldes
    bankocard = "bc0"; // Pegepind til container input felter sættes til bankocard 0 hvorefter funktioner kaldes
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns();

    //bankocard 1 udfyldes
    bankocard = "bc1"; // Pegepind til container input felter sættes til bankocard 1 hvorefter funktioner kaldes
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns();

    //bankocard 2 udfyldes
    bankocard = "bc2"; // Pegepind til container input felter sættes til bankocard 2 hvorefter funktioner kaldes
    bankoRow0();
    bankoRow1();
    bankoRow2();
    sortAllColumns(); 
    
}


// BANKO ROW 0
function bankoRow0() {

//do-while loop that keeps looping the entire function until there's 5 numbers in row
    do {

        let elementId;
        //clear container inputs
        for (let i = 0; i < 9; i++) {
            elementId = bankocard + "r0c" + i; //opsætter pegepind til container input felt
            document.getElementById(elementId).value = "";
        }

        randomNumbersArray0 = [];
        let randomNumber;
        //udtag 5 tilfældige tal
        for (let i = 0; i < 5; i++) { //i 0..4
            //do-while loop keeps looping until we have 1 unique number from 1..90 compared to numbers in randomNumbersArray0
            do {
                randomNumber = Math.floor(Math.random() * 90) + 1; 
            } while (randomNumbersArray0.includes(randomNumber)); //"includes" er sand hvis tal findes i array
    
            randomNumbersArray0.push(randomNumber);//push the unique numbers into randomNumbersArray0
        }

        let low;
        let high;
       
        for (let t = 0; t < 5; t++) { //t (tal) 0..4
            for (let i = 0; i < 9; i++) { //i (column) 0..8
                low = i * 10; //column min værdi
                high = low + 9; //column max værdi    
                if (high === 89){ high = 90; } //column 8 max værdi = 90
                //place the number in container inputs current bankocard r0c0..r0c8 in the correct column based on its value
                //to eller flere tilfældige tal kan ende i samme column -> de overskrives -> der er ikke 5 tal i rækken
                if (randomNumbersArray0[t] >= low && randomNumbersArray0[t] <= high) {
                    elementId = bankocard + "r0c" + i; //opsætter pegepind til container input felt
                    document.getElementById(elementId).value = randomNumbersArray0[t];//indsætter tal i container tekst felt           
                }
            }  
       }

    //Antal tomme felter i container input optælles. Er antal > 4 -> udtag 5 nye tal 
    //(9 felter i rækken -> mere end 4 tomme felter -> mindre end 5 tal i rækken)
    } while (countEmptyFields(0) > 4);
}


// BANKO ROW 1
function bankoRow1() {

//do-while loop that keeps looping the entire function until there's 5 numbers in row
    do {

        let elementId;
        //clear currenct bankocard r1c0..r1c8 container inputs with an empty string
        for (let i = 0; i < 9; i++) {            
            elementId = bankocard + "r1c" + i; //opsætter pegepind til container input felt
            document.getElementById(elementId).value = "";        
        }
       
        randomNumbersArray1 = []; 
       
        let randomNumber;
        //udtag 5 tilfældige tal
        for (let i = 0; i < 5; i++) {       
            //do-while loop keeps looping until we have 1 unique number from 1..90
            //compared to numbers in randomNumbersArray0 and randomNumbersArray1
            do {
                randomNumber = Math.floor(Math.random() * 90) + 1;
            } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber));
    
            randomNumbersArray1.push(randomNumber); //push the unique numbers into randomNumbersArray1
        }
        
        let low;
        let high;
        //sorter de 5 tilfældige tal i 8 column og indsæt tal i rækkens container input    
        for (let t = 0; t < 5; t++) {
                for (let i = 0; i < 9; i++) {
                low = i * 10; //column min værdi
                high = low + 9; //column max værdi        
                if (high === 89){ high = 90; } //column 8 max værdi = 90
                //place the number in container inputs current bankocard r1c0..r1c8 in the correct column based on its value
                if (randomNumbersArray1[t] >= low && randomNumbersArray1[t] <= high) {
                    elementId = bankocard + "r1c" + i; //opsætter pegepind til container input felt
                    document.getElementById(elementId).value = randomNumbersArray1[t]; //indsætter tal i container tekst felt               
                }
            }     
        }
    //Antal tomme felter i container input optælles. Er antal > 4 -> udtag 5 nye tal
    } while (countEmptyFields(1) > 4);
}

// BANKO ROW 2
function bankoRow2() {

    //do-while loop keeps looping until no column is empty
    do {
    
        //do-while loop that keeps looping the entire function until there's 5 numbers in row
        do {
        
            let elementId
            //clear currenct bankocard r2c0..r2c8 container inputs with an empty string
            for (let i = 0; i < 9; i++) {
                elementId = bankocard + "r2c" + i; //opsætter pegepind til container input felt
                document.getElementById(elementId).value = "";
            }

            randomNumbersArray2 = [];
            let randomNumber;
            //udtag 5 tilfældige tal
            for (let i = 0; i < 5; i++) {
                //do-while loop keeps looping until we have 1 unique number from 1..90
                //compared to numbers in randomNumbersArray0 and randomNumbersArray1 and randomNumbersArray2
                do {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber) || randomNumbersArray2.includes(randomNumber));
        
                randomNumbersArray2.push(randomNumber); //push the unique numbers into randomNumbersArray2
            }
        
            let low;
            let high;
            //sorter de 5 tilfældige tal i 8 column og indsæt tal i rækkens container input
            for (let t = 0; t < 5; t++) {        
                for (let i = 0; i < 9; i++) {
                    low = i * 10; //column min værdi
                    high = low + 9; //column max værdi              
                    if (high === 89){high = 90; } //column 8 max værdi = 90
                    //place the number in container inputs current bankocard r2c0..r2c8 in the correct column based on its value
                    if (randomNumbersArray2[t] >= low && randomNumbersArray2[t] <= high) {
                        elementId = bankocard + "r2c" + i; //opsætter pegepind til container input felt
                        document.getElementById(elementId).value = randomNumbersArray2[t]; //indsætter tal i container tekst felt 
                   
                    }
                }
        
            }
        //Antal tomme felter i container input optælles. Er antal > 4 -> udtag 5 nye tal    
        } while (countEmptyFields(2) > 4);
    //Antal tomme columns i container input søjler optælles. Er antal > 0 -> udtag 5 nye tal (ingen columns må være tomme)
    }while (checkEmptyColumn() > 0);
}