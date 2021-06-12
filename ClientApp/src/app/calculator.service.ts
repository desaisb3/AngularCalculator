import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CalculatorService {

  public equation : string = "";

  constructor() { }

  public async calculatorOperation(input: string) {
    let output: number;
    console.log("Awaiting Promise!");
    await new Promise (resolve => setTimeout (resolve, 2000));
    output = parseInt(input) + 2;
    console.log("Finished Awaiting Promise");
    return output.toString();
  }


  //function to calculate addition
  public async plusFunction(input: string){
    console.log(input);
    return input;
  }

  public appendEqaution(input: string){
    this.equation += input;
    console.log(this.equation);
  }

}
