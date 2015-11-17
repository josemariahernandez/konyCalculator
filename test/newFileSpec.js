describe("Calculator", function() {
  var operando1 = 1;
  var operando2 = 2;
  var operando3 = 0;
  var operando=[operando1,operando2];
  var operando0=[operando1,operando3];

  it("should add operando1 operando2", function() {
    expect(sumar(operando)).toEqual(operando1+operando2);
  });

  it("should substract operando1 operando2", function(){
    expect(restar(operando)).toEqual(operando1-operando2);
  });

  it("should multiply operando1 operando2", function(){
    expect(multiplicar(operando)).toEqual(operando1*operando2);
  });

  it("should divide operando1 operando2", function(){
    if (operando[1]!==0){
      expect(dividir(operando)).toEqual(operando1/operando2);
    }
  })
  it("should show error divide zero", function(){
    if (operando[1]==0){
      expect(dividir(operando0)).toEqual(-1);
    };
  })

});