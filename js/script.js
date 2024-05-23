






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