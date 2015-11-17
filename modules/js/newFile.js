function setVariable(){
	var arrayOperandos = [kony.math.toInteger(newForm.operando1.text),kony.math.toInteger(newForm.operando2.text)]
	return arrayOperandos;
}

function printResult(resul){
	newForm.resultado.text = resul;
}

function sumar(operando) {
	var resultado = operando[0] + operando[1];	
	return resultado;
}

function restar(operando){
	var resultado = operando[0] - operando[1];
	return resultado;
}

function multiplicar(operando){
	var resultado = operando[0] * operando[1];
	return resultado;
}

function dividir(operando){
	if (operando[1]!==0){
		var resultado = operando[0] / operando[1];
		return resultado;
	}else{
		showAlertDivisionZero();
	};
}

function showAlertDivisionZero(){
	kony.ui.Alert({message: "La division por 0 no está soportada",
	               alertType: constants.ALERT_TYPE_INFO,
	               yesLabel:"Close"}, 
	               {});//usage: kony.ui.Alert(basicProperties,layoutProperties,platformSpecificProperties);
		return -1;	
}