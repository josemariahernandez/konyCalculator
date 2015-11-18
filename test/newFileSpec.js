describe("Calculator", function() {
  var operando1 = 1;
  var operando2 = 2;
  var operando0 = 0;
  var args=[operando1,operando2];
  var argsWithZero=[operando1,operando0];

  beforeEach(function() {

    kony = {
        ui: {
            Alert : function(a,b){ }
      }
    };

    constants = {
      ALERT_TYPE_INFO: "INFO"
    }

  });

  it("should add operando1 operando2", function() {
    expect(FileController.sumar(args)).toEqual(operando1+operando2);
  });

  it("should substract operando1 operando2", function(){
    expect(FileController.restar(args)).toEqual(operando1-operando2);
  });

  it("should multiply operando1 operando2", function(){
    expect(FileController.multiplicar(args)).toEqual(operando1*operando2);
  });

  it("should divide operando1 operando2", function(){
    if (args[1]!==0){
      expect(FileController.dividir(args)).toEqual(operando1/operando2);
    }
  })

  it("should show error when divide by zero", function(){
    //GIVEN
    spyOn(kony.ui, "Alert").and.callFake(function(a,b) {});
    var expectedArgs = [{
          message: "La division por 0 no está soportada",
                  alertType: constants.ALERT_TYPE_INFO,
                  yesLabel:"Close"
             },{}];

    //WHEN
    if (argsWithZero[1]===0){
      FileController.dividir(argsWithZero);
    }

    // THEN
    expect(kony.ui.Alert.calls.count()).toEqual(1);
    expect(kony.ui.Alert.calls.argsFor(0)).toEqual(expectedArgs);
  })

});