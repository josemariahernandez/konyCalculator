function sumar() {
	var operando1 = newForm.operando1.text;
	var operando2 = newForm.operando2.text;
	var resultado = kony.math.toInteger(operando1) + kony.math.toInteger(operando2);
	newForm.resultado.text = resultado;
	return;
}

function restar(){
	var operando1 = newForm.operando1.text;
	var operando2 = newForm.operando2.text;
	var resultado = kony.math.toInteger(operando1) - kony.math.toInteger(operando2);
	newForm.resultado.text = resultado;
	return;
}

function multiplicar(){
	var operando1 = newForm.operando1.text;
	var operando2 = newForm.operando2.text;
	var resultado = kony.math.toInteger(operando1) * kony.math.toInteger(operando2);
	newForm.resultado.text = resultado;
	return;
}

function dividir(){
	var operando1 = newForm.operando1.text;
	var operando2 = newForm.operando2.text;
	var resultado = kony.math.toInteger(operando1) / kony.math.toInteger(operando2);
	newForm.resultado.text = resultado;
	return;
}