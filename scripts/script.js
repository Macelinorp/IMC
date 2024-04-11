const btnCalc = document.getElementById('calc-btn');
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const resultado = document.querySelector('.span-result');
const message = document.querySelector('.imc-message')

let imcMessage;

function calcImc(altura, peso){
    imc = peso/(altura * altura);
    verificarImC(imc);
    displayResult(imc, imcMessage);

    setTimeout(() => {
        console.log('clear');
        clear();
    }, 3000)
}

function verificarImC(imc){
    if(imc <= 18.5){
        imcMessage = 'Você está abaixo do peso ideal !';
    }  
    if(imc >= 18.5 && imc <= 24.9){
        imcMessage = 'Parabéns, você está no peso ideal !';
    } 
    if(imc >= 25 && imc <= 29.9){
        imcMessage = 'Você está um pouco acima do peso !';
    }
    if(imc >= 30 && imc <= 39.9){
        imcMessage = 'Você está em estado de obesidade Grau I !';
    }
    if(imc >= 40) {
        imcMessage = 'Você está em estado de obesidade Grau II !';
    }

    return imcMessage;
}

function displayResult(imc, imcMessage){
    resultado.innerHTML = imc.toFixed(2);
    message.innerHTML = imcMessage;
}


function clear(){
    resultado.innerHTML = '';
    message.innerHTML = '';

}

btnCalc.addEventListener('click', (e) => {
    e.preventDefault();
    const peso = inputPeso.value;
    const altura =  inputAltura.value;
    if(peso === '' || altura === ''){
        Toastify({
            text: "Preencha os campos",
            duration: 8000,
            style: {
                background: "linear-gradient(to right, #560000, #ee391f)",
              }
            }).showToast();
            displayResult('','');
    }
    calcImc(altura, peso);
})