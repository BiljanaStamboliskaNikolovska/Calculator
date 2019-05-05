let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let operator = document.getElementById('operator');

let result = document.getElementById('result');
let resultString = '';

let resultIsHighOrLow = document.getElementById('resultIsHighOrLow');

value1.addEventListener('change', presmetka);
value2.addEventListener('change', presmetka);
operator.addEventListener('change', presmetka);


function presmetka() {
    let prvaVrednost = parseInt(value1.value, 10);
    let vtoraVrednost = parseInt(value2.value, 10);
    let operacija = operator.value;

    if (operacija === '+') {
        resultString = prvaVrednost + vtoraVrednost;
    } else if (operacija === '-') {
        resultString = prvaVrednost - vtoraVrednost;
    } else if (operacija === '*') {
        resultString = prvaVrednost * vtoraVrednost;
    } else if (operacija === '/') {
        resultString = prvaVrednost / vtoraVrednost
    };
    result.innerHTML = resultString;

    if (prvaVrednost === isNaN || prvaVrednost === '' || vtoraVrednost === isNaN || vtoraVrednost === '' || operacija === '') {
        resultString = 'Error';
    } else if (prvaVrednost % 2 === 0 && vtoraVrednost % 2 === 0) {
        alert('both values are Evan');
    } else if (prvaVrednost % 2 !== 0 && vtoraVrednost % 2 !== 0) {
        alert('both values are odd');
    }

    let highOrLow = resultString;

    if (highOrLow > 100) {
        resultIsHighOrLow.innerHTML = 'The result is higher then 100.'
    } else {
        resultIsHighOrLow.innerHTML = 'The result is lower then 100.'
    }
}; 