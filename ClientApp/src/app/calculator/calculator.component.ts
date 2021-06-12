import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public inputValue = "";
  public outputValue = "";
  public buttons = ['0','1','2','3','4','5','6','7','8','9','0','+','-','*','/','='];
  public buttonClear : string = "C";
  public buttonPlus : string = "+";
  public buttonCalculate : string = "=";
  public appendedString = "";
  public buttonTwo :string = "2";
  public buttonOne : string = "1";
  public buttonThree : string = "3";
  public buttonFour : string = "4";
  public buttonFive : string = "5";
  public buttonSix : string = "6";
  public buttonSeven : string = "7";
  public buttonEight : string = "8";
  public buttonNine : string = "9";
  public buttonZero : string = "0";
  public answer : string = "";

  public buttonMinus : string = "-";
  public buttonMultiply : string = "*";
  public buttonDivide : string = "/";



  //Importing Calculator Service Operation From calculator.service.ts
  constructor(private calculator: CalculatorService) { }

  ngOnInit() {
  }

  async buttonExample() {
    console.log(this.inputValue);
    //CalculatorOperator Function comes from the service which is basically a typescript file which does the logic part of the code
    this.outputValue=await this.calculator.calculatorOperation(this.inputValue);
    console.log(this.outputValue);
  }

  async handleChild(event){
    console.log(event);
  }

  async evaluateCalc(){
    this.answer=eval((await this.calculator.plusFunction(this.appendedString)));
    console.log(eval(this.answer));
    return this.answer.toString();
  }

  async appendOne(){
    this.appendedString += this.buttonOne;
    console.log(this.appendedString);
  }

  async appendTwo(){
    this.appendedString += this.buttonTwo;
    console.log(this.appendedString);
  }

  async appendPlus(){
    this.appendedString += this.buttonPlus;
    console.log(this.appendedString);
  }

  async appendThree(){
    this.appendedString += this.buttonThree;
    console.log(this.appendedString);
  }

  async appendFour(){
    this.appendedString += this.buttonFour;
    console.log(this.appendedString);
  }

  async appendFive(){
    this.appendedString += this.buttonFive
    console.log(this.appendedString);
  }

  async appendSix(){
    this.appendedString += this.buttonSix;
    console.log(this.appendedString);
  }

  async appendSeven(){
    this.appendedString += this.buttonSeven;
    console.log(this.appendedString);
  }

  async appendEight(){
    this.appendedString += this.buttonEight;
    console.log(this.appendedString);
  }

  async appendNine(){
    this.appendedString += this.buttonNine;
    console.log(this.appendedString);
  }

  async appendZero(){
    this.appendedString += this.buttonZero;
    console.log(this.appendedString);
  }

  async appendMinus(){
    this.appendedString += this.buttonMinus;
    console.log(this.appendedString);
  }

  async appendMultiply(){
    this.appendedString += this.buttonMultiply;
    console.log(this.appendedString);
  }

  async appendDivide(){
    this.appendedString += this.buttonDivide;
    console.log(this.appendedString);
  }

  async clearScreen(){
    this.appendedString = "0";
    console.log(this.appendedString);
  }


}

