const validator = { //se crea el objeto validador
  isvalid:(creditCardNumber) => {
    let numerosArray = creditCardNumber.split('');
    //se transforma los numeros de tarjeta a un array
    let suma=0
    //declaramos la variable suma
    //se crea un for que iterará con numerosArray en toda su extensión
    for (let it = 0; it < numerosArray.length; it++) {
      //se busca la posición par
      if (it % 2 == 0) {
        //y se multiplica por dos
        numerosArray[it] = numerosArray[it] * 2;
        
        if (numerosArray[it]>=10) {
          numerosArray[it] = numerosArray[it]-9;
          //si son mayor o igual que diez se les restará 9
        }
      }
      //si son impares se les transformará a numero
      else {
        numerosArray[it] = Number(numerosArray[it])
      }
      //se suman las posiciones pares e impares
      suma = suma + numerosArray[it]
    } 
    //si la suma dividido 10 es igual a 0 entonces nuestra tarjeta es valida
    return suma%10 == 0;
    
  },
  //se crea el onjeto enmascarador 
  maskify:(creditCardNumber) => {
    let numerosArray = creditCardNumber.split('');
    //declaro la variable que contendrá los numeros de la tarjeta transformador en array
    let point = numerosArray.length - 4
    //creo una variable que contenga todas las posiciones menos las ultimas 4
    let numMask = [ ]
    //creo una variable que contendra los resultados de la iteración del for
    for (let it = 0; it < point; it++) {
      numMask.push("#");
    }
    //se enmascaran las posiciones del array
    for (let it = 0; it < 4; it++) {
      numMask.push(numerosArray[point+it]);
    }
    //se agregan los 4 ultimos numeros no enmascarados
    return numMask.join("")
  } //junto el resultado de las iteraciones
  
}
export default validator;


