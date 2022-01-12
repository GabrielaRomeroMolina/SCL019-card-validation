import validator from './validator.js';

const patrocinio = document.getElementById("patrocinio")
patrocinio.addEventListener('click', checkcard)

function checkcard(){
    let numeros = document.getElementById("numbercard").value
    console.log(numeros)
    let cardValid = validator.isvalid(numeros)
    if (cardValid) {
       alert("Tu tarjeta" + validator.maskify(numeros) + "es válida") 
    } else {
        alert("Tu tarjeta" + validator.maskify(numeros) + " no es valida")
    }
    
    
    
} 



