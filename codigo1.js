var posInicial=[0,0];
var posFinal=[0,0];
var columnaInicial=0;
var filaInicial=0;
var columnaFinal=0;
var filaFinal=0;
function casillaAleatoria(){
  columnaInicial=Math.floor(Math.random() * 6 + 1);
  posInicial[0]=columnaInicial;
  filaInicial=Math.floor(Math.random() * 6 + 1);
  posInicial[1]=filaInicial;
  columnaFinal=Math.floor(Math.random() * 6 + 1);
  posFinal[0]=columnaFinal;
  filaFinal=Math.floor(Math.random() * 6 + 1);
  posFinal[1]=filaFinal;
  if (posInicial[0,1]=posFinal[0,1]) {
    casillaAleatoria();
  }
  }
  casillaAleatoria();
console.log(`La posicion inicial es: Columna ${posInicial[0]} Fila ${posInicial[1]}`);
console.log(`La posicion final es: Columna ${posFinal[0]} Fila ${posFinal[1]}`);
