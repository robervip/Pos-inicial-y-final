var posInicial=[0,0];
var posFinal=[0,0];
var columnaInicial=0;
var filaInicial=0;
var columnaFinal=0;
var filaFinal=0;
function casillaAleatoria(){
  while (true) {
    columnaInicial=Math.floor(Math.random() * 6 + 1);
    columnaFinal=Math.floor(Math.random() * 6 + 1);
    if (columnaInicial!=columnaFinal) {
      break;
  }
}
  while (true) {
    filaInicial=Math.floor(Math.random() * 6 + 1);
    filaFinal=Math.floor(Math.random() * 6 + 1);
    if (filaInicial!=filaFinal) {
      break;
    }
  }
}
posInicial.splice(`0,1,${columnaInicial}`);
posFinal.splice(`0,1,${columnaFinal}`);
posInicial.splice(`1,1,${filaInicial}`);
posFinal.splice(`1,1,${filaFinal}`);
casillaAleatoria();
console.log(`La posicion inicial es: Columna ${posInicial[0]} Fila ${posInicial[1]}`);
console.log(`La posicion final es: Columna ${posFinal[0]} Fila ${posFinal[1]}`);
