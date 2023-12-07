//COUNTS EMPTY FIELD IN ROW

function countEmptyFields(row) {

    let emptyFieldCount = 0;
    let elementId;
    let fieldValue;


    for (let i = 0; i < 9; i++) { // i 0..8 (columns)

        elementId = bankocard + "r" + row + "c" + i; //opsætter pegepind til container input

        fieldValue = document.getElementById(elementId).value; 


        if (fieldValue === "") { emptyFieldCount++;}

    }

    return emptyFieldCount; //funktion returnerer med værdi = antal tomme felter i row

} 

//COUNT EMPTY FIELDS IN ONE COLUMN

function CountEmptyFieldsOneColumn(col) {

    let emptyFieldCount = 0;
    let elementId;
    let fieldValue;

    //antal tomme felter i column col optælles

    for(let row = 0; row < 3; row++){ // row 0..2


        elementId = bankocard + "r" + row + "c" + col; //opsætter pegepind til container input

        fieldValue = document.getElementById(elementId).value;

        if (fieldValue === "") {emptyFieldCount++;} //er felt tomt tælles emptyFieldCount op

    }

    return emptyFieldCount; //funktion returnerer med værdien = antal tomme felter i column col

}

//COUNT TOTAL EMPTY FIELDS      

function checkEmptyColumn(){

    let columnError = 0;

    //column 0..8 gennemgås for tomme felter. Er der 3 tomme felter i en column tælles columnError op

    for(let col = 0; col < 9; col++){ // c 0..8 (columns)

        if(CountEmptyFieldsOneColumn(col) > 2){columnError++;} //er der 3 tomme felter i column c tælles columnsError op

    } 

    return columnError; //funktion returnerer med værdien = antal tomme columns i container inputs

}

    //SORT ONE COLUMN

function sortOneColumn(col){ 

    let arrayColumn = [];
    
    //hent værdier for column col fra container input til arrayColumn

    elementId = bankocard + "r0c" + col; //opsæt pegepind til container input til row 0 og aktuelle column

    arrayColumn[0] = document.getElementById(elementId).value; //indsæt container input i array(0)

    elementId = bankocard + "r1c" + col; //opsæt pegepind til container input til row 1 og aktuelle column

    arrayColumn[1] = document.getElementById(elementId).value; //indsæt container input i array(1)

    elementId = bankocard + "r2c" + col; //opsæt pegepind til container input til row 2 og aktuelle column

    arrayColumn[2] = document.getElementById(elementId).value; //indsæt container input i array(2)


    let emptyFieldCount = 0;

    //optæl tomme felter i column

    for(let i = 0; i < 3; i++){ //i 0..2 (row)   

        if(arrayColumn[i] === ""){ emptyFieldCount++;} //er feltet tomt tælles emptyFiedCount op   

    }


    //hvis der 0 tomme felter i column sortes column

    if(emptyFieldCount === 0){ arrayColumn.sort();} //ingen tomme felter -> sorterer column (stigende)


    //hvis der er 1 tomt felt i column sortes afhængig af placering af det tomme felt

    if(emptyFieldCount === 1){

        

        let x;

        //hvis øverste felt i column er tom (column 0) -> hvis værdi i column 1 > column 2 -> ombyt værdi i column 1 og column 2

        if(arrayColumn[0] === ""){

            if(arrayColumn[1] > arrayColumn [2]){

                x = arrayColumn[1];

                arrayColumn[1] = arrayColumn[2];

                arrayColumn[2] = x;

            }

        }

        //hvis miderste fejl column er tom (column 1) -> hvis værdi i column 0 > column 2 -> ombyt værdi i column 0 og column 2

        if(arrayColumn[1] === ""){

            if(arrayColumn[0] > arrayColumn [2]){

                x = arrayColumn[0];

                arrayColumn[0] = arrayColumn[2];

                arrayColumn[2] = x;

            }

        }

        //hvis nedeste fejl i column er tom (column 2) -> hvis værdi i column 0 > column 1 -> ombyt værdi i column 0 og column 1

        if(arrayColumn[2] === "") {

            if(arrayColumn[0] > arrayColumn[1]) {

                x = arrayColumn[0];

                arrayColumn[0] = arrayColumn[1];

                arrayColumn[1] = x;

            }  

        }    

    }


    //hvis der er 2 tomme felter i column skal column ikke sorteres


    //indsæt værdier for column col fra arrayColumn til container input

    elementId = bankocard + "r0c" + col; //opsæt pegepind til container input til row 0 og aktuelle column

    document.getElementById(elementId).value = arrayColumn[0]; //indsæt værdi i array(0) i container input

    elementId = bankocard + "r1c" + col; //opsæt pegepind til container input til row 1 og aktuelle column

    document.getElementById(elementId).value = arrayColumn[1]; //indsæt værdi i array(1) i container input

    elementId = bankocard + "r2c" + col; //opsæt pegepind til container input til row 2 og aktuelle column

    document.getElementById(elementId).value = arrayColumn[2]; //indsæt værdi i array(2) i container input

} 

//SORT ALL COLUMNS

function sortAllColumns(){


    for(let col = 0; col < 9; col++){ //c 0..8 (column)

        sortOneColumn(col); //sort column col

    }

}