// Erklæring af globale variabler (Global Scope) kan anvendes på tværs af alle funktioner
let randomNumbersArray0;
let randomNumbersArray1;
let randomNumbersArray2;

let bankocard;



function banko(){

    
    //bankocard 0 udfyldes
    bankocard = "bc0"; // Pegepind til tekstfelter
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

// Do-while funktionen udføres indtil der er 5 tal i rækken 
do {

    //Clear all inputs
    for (let i = 0; i < 9; i++) {
        elementId = bankocard + "r0c" + i;
        document.getElementById(elementId).value = "";
    }
   
    randomNumbersArray0 = [];
   

    for (let i = 0; i < 5; i++) {
        



        // Udtager random tal og tjekker at tal er unikke.
        do {
            randomNumber = Math.floor(Math.random() * 90) + 1; //Udtager et tal mellem 0 og 1, hvor 0 er med og 1 er ikke med. dvs efter *90 heltal mellem 0..89 og så ligger man 1 for at få tal mellem 1..90
        } while (randomNumbersArray0.includes(randomNumber)); //includes er sand hvis random number findes i arrayet

        randomNumbersArray0.push(randomNumber);
    }

    for (let t = 0; t < 5; t++) {

        for (let i = 0; i < 9; i++) {
            low = i * 10
            high = low + 9
    
            if (high === 89){ high = 90; }

            if (randomNumbersArray0[t] >= low && randomNumbersArray0[t] <= high) {
                elementId = bankocard + "r0c" + i;
                document.getElementById(elementId).value = randomNumbersArray0[t];
           
            }
        }
   
    }

} while (countEmptyFields(0) > 4); // Max 4 tomme columns (minimum 5 tal i hver row) ellers udtages nye tal (ingen tal i samme talgruppe(1..9, 10..19 osv.))
}


// BANKO-ROW 1


function bankoRow1() {

    do {
    
        //Clear all inputs
        for (let i = 0; i < 9; i++) {
            
            elementId = bankocard + "r1c" + i;
            document.getElementById(elementId).value = "";
        
        }
       
        randomNumbersArray1 = [];
       
    
        for (let i = 0; i < 5; i++) {
        
    
    
            // udtager random tal og tjekker at tal er unikke inklusiv tal i row 0, ellers udtages nyt tal
            do {
                randomNumber = Math.floor(Math.random() * 90) + 1;
            } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber)); 
    
            randomNumbersArray1.push(randomNumber);
        }
    
       for (let t = 0; t < 5; t++) {
    
            for (let i = 0; i < 9; i++) {
                low = i * 10;
                high = low + 9
        
                if (high === 89){ high = 90; }
    
                if (randomNumbersArray1[t] >= low && randomNumbersArray1[t] <= high) {
                    elementId = bankocard + "r1c" + i;
                    document.getElementById(elementId).value = randomNumbersArray1[t];
               
                }
            } 
    
        }
    
    } while (countEmptyFields(1) > 4);
    }

// BANKO-ROW 2

    function bankoRow2() {
do {
    
       
        do {
        
            //Clear all inputs
            for (let i = 0; i < 9; i++) {
                elementId = bankocard + "r2c" + i;
                document.getElementById(elementId).value = "";
            }
           
            randomNumbersArray2 = [];
           
        
            for (let i = 0; i < 5; i++) {
             
        
        
               // udtager random tal og tjekker at tal er unikke inklusiv tal i row 0 og row 1, ellers udtages nyt tal
                do {
                    randomNumber = Math.floor(Math.random() * 90) + 1;
                } while (randomNumbersArray0.includes(randomNumber) || randomNumbersArray1.includes(randomNumber) || randomNumbersArray2.includes(randomNumber));
        
                randomNumbersArray2.push(randomNumber);
            }
        

            for (let t = 0; t < 5; t++) {
        
                for (let i = 0; i < 9; i++) {
                    low = i * 10;
                    high = low + 9
            
                    if (high === 89){high = 90; }
        
                    if (randomNumbersArray2[t] >= low && randomNumbersArray2[t] <= high) {
                        elementId = bankocard + "r2c" + i;
                        document.getElementById(elementId).value = randomNumbersArray2[t];
                   
                    }
                }
        
            }

        } while (countEmptyFields(2) > 4);
        
    }while (checkEmptyColumn() > 0);
} 

