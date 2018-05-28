var app = angular.module("CalculatorApp" , []);

app.controller ("CalcAppCtrl",function(){
  this.operator = "+";
  this.result ="Result";
  this.changeOperator = function (opr) {
      this.operator = opr;
  };
  this.findResults = function (){
      switch(this.operator){
          case '+':
          this.result = this.num1 + this.num2;
          break;
          case '-':
              this.result = this.num1 - this.num2;
              break;
          case '*':
              this.result = this.num1 * this.num2;
              break;
          case '/':
              this.result = this.num1 / this.num2;
              break;
          default:
              this.result ="result";
              break;
      }
  };
  this.clearAll = function (){
      this.num1 = '';
      this.num2 = '';
      this.operator = '+';
      this.result = 'result';
  };
});