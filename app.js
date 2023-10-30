const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('calcular');
const btnReset = document.getElementById('reset');

btnCalcular.addEventListener('click', () => {
    let multiplicar = num1.valueAsNumber * num2.valueAsNumber

    if (num1.valueAsNumber == 0 || num2.valueAsNumber == 0) {
        resultado.innerHTML = 'No se puede dividir por 0.';
    }
    else if (num1.valueAsNumber < 0 || num2.valueAsNumber < 0) {
        resultado.innerHTML = 'Ingrese un número positivo (Mayor a 0).';
    } else {
        resultado.innerHTML = `El ${num1.valueAsNumber}% de ${num2.valueAsNumber} es ${multiplicar / 100}.`;
    }


})


btnReset.addEventListener('click', () => {
    num1.innerHTML = '';
    num2.innerHTML = '';
    resultado.innerHTML = '';
})