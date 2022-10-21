// creare bottone del form per la ricezione dei dati
let buttonHtml = document.getElementById('btnInvio');

// seleziono elemento input name
let inputName = document.getElementById('inputName');

// seleziono elemento input km
let inputKm = document.getElementById('inputKm');

// seleziono elemento input input eta
let inputEta = document.getElementById('inputEta');

// prezzo al km standard
let prezzzoKmStandard = 0.21;

// creo la funzione
buttonHtml.addEventListener('click', function(){
    // dopo il click del bottone si attiva il codice sotto

    // value di name
    const valueName = inputName.value;

    // value di km
    const valueKm = inputKm.value;

    // value della select età
    const valueEta = inputEta.value;

    if ( valueName == '' && valueKm == '' && valueEta == '' ){
        console.log('complita tutto!!')
    } else {
        let prezzoBiglietto = valueKm * prezzzoKmStandard;
        
        let prezzoMaggiorenne = prezzoBiglietto

        let prezzoMinorenne = prezzoBiglietto * 0.80

        let prezzoOver65 = prezzoBiglietto * 0.60

        if( valueEta === 'maggiorenne' ){
            document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + prezzoMaggiorenne.toFixed(2);
        } else if(valueEta === 'minorenne'){
            document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + prezzoMinorenne.toFixed(2);
        } else if(valueEta === 'over65'){
            document.getElementById('prezzo').innerHTML = "il prezzo del biglietto è: " + prezzoOver65.toFixed(2);
        }
    }
})