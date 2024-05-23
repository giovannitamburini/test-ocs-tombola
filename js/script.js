





// FUNCTION -----------------------------------------

// funzione per creare una singola riga di una cartella
function creatorSingleRow(startValue){

    let singleRow = [];

    for(let i=1; i<=5; i++){

        singleRow.push(i + startValue);
    }

    return singleRow;
}