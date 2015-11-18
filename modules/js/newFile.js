function inicializarNewForm(){
	FileController.init();

}

var FileController= {

   init: function(){

   		FileController.clickSumar();
   		FileController.clickRestar();
   		FileController.clickMultiplicar();
   		FileController.clickDividir();
   },

  clickSumar: function(){
  		newForm.sumar.onClick=function(){
  									var array = FileController.setVariable();
  									var resultado=FileController.sumar(array);
  									FileController.printResult(resultado);
  								}

  },


  clickRestar: function(){
  		newForm.restar.onClick=function(){
  									var array = FileController.setVariable();
  									var resultado=FileController.restar(array);
  									FileController.printResult(resultado);
  								}

  },


  clickMultiplicar: function(){
  		newForm.multiplicar.onClick=function(){
  									var array = FileController.setVariable();
  									var resultado=FileController.multiplicar(array);
  									FileController.printResult(resultado);
  								}

  },


  clickDividir: function(){
  		newForm.dividir.onClick=function(){
  									var array = FileController.setVariable();
  									var resultado=FileController.dividir(array);
  									FileController.printResult(resultado);
  								}

  },

  setVariable: function(){
  		var arrayOperandos = [kony.math.toInteger(newForm.operando1.text),kony.math.toInteger(newForm.operando2.text)]
		return arrayOperandos;
  },

  printResult: function(resul){
  		newForm.resultado.text = resul;
  },

  sumar: function(arrayOperandos){
  	var resultado = arrayOperandos[0] + arrayOperandos[1];
  	return resultado;
  },

  restar: function(arrayOperandos){
  	var resultado = arrayOperandos[0] - arrayOperandos[1];
  	return resultado;
  },

  multiplicar: function(arrayOperandos){
  	var resultado = arrayOperandos[0] * arrayOperandos[1];
  	return resultado;
  },

  dividir: function(arrayOperandos){
  	if (arrayOperandos[1]!==0){
		var resultado = arrayOperandos[0] / arrayOperandos[1];
		return resultado;
	}else{
		FileController.showAlertDivisionZero();
	};
  },

  showAlertDivisionZero: function(){
	kony.ui.Alert({message: "La division por 0 no está soportada",
	               alertType: constants.ALERT_TYPE_INFO,
	               yesLabel:"Close"},
	               {});
  }
}

