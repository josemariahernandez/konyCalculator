require(['newFile.js']);

//exports.inverse = function(a){

function inverso(a){
  var calc = require('newFile.js');
//  if (a !== 0) {
  	var array = [1,a];
    return calc.dividir(array);
//  } else {
//    return undefined;
  //}
}

function print(resul){
	//var calc = require('newFile.js');
	//return calc.printResult(resul);
	newForm.resultado2.text = resul;
}

function setVariable2(){
	var arrayOperandos = [kony.math.toInteger(newForm.operando3.text),kony.math.toInteger(newForm.operando4.text)]
	return arrayOperandos;
}

