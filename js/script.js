

let tombola = createTombola();

console.log(tombola);




// FUNCTION -----------------------------------------

// funzione per creare una singola riga di una cartella
function createSingleRow(startValue){

    let singleRow = [];

    for(let i=1; i<=5; i++){

        singleRow.push(i + startValue);
    }

    return singleRow;
}


// funzione per creare una cartella
function createSingleGameFolder(counter){

    let gameFolder = [];

    for(let j=0; j<3; j++){

        gameFolder.push(createSingleRow(counter));

        counter += 10;
    }

    return gameFolder;
}


// funzione per creare la tombola (6 cartelle)
function createTombola(){

    let tombolaArray = [];
    counter = 0;

    while(counter <= 60) {

        // cartella con unità da 1 a 5
        tombolaArray.push(createSingleGameFolder(counter));
        // cartella con unità da 6 a 10
        tombolaArray.push(createSingleGameFolder(counter + 5));

        // + 30 perchè 2 cartelle contengono 30 numeri
        counter += 30;
    }

    return tombolaArray;
}