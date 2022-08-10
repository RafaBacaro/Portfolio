import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  public subText: string = '';
  public mainText: string = '0';
  public operand1: number = 0;
  public operand2: number = 0;
  public typeOfCalc: string = '';
  public calculationString: string[] = [];
  public cols: any[] = [];
  public calcValue: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { field: 'one', header: '' },
      { field: 'two', header: '' },
      { field: 'three', header: '' },
      { field: 'four', header: '' }
    ];

    this.calcValue = [{ one: 'AC', two: '+/-', three: '%', four: '/' },
    { one: '7', two: '8', three: '9', four: 'X' },
    { one: '4', two: '5', three: '6', four: '-' },
    { one: '1', two: '2', three: '3', four: '+' },
    { one: '0', three: ',', four: '=' }];
    //this.calcValue = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', ',', '='];

  }

  clickedOnBtn(rowData: any) {
    if (rowData === '%' || rowData === '/'
      || rowData === 'X' || rowData === '-' || rowData === '+') {

      /*  this.typeOfCalc = this.subText.length <= 1 ? rowData : this.typeOfCalc;
       this.subText += rowData;
 
       if (this.subText.length >= 3) {
         this.getAnswer(rowData);
       } */
    } else {
      if (rowData === 'AC') {
        this.resetAll();
      } else {

        if (rowData === '=') {
          this.getAnswer(rowData);
        } else {
          if (this.calculationString.length === 0) {
            this.calculationString.push(rowData);
          } else {
            if(this.calculationString.length === 1) {
              this.calculationString[0] = this.calculationString[0] + rowData;
            } else {
              this.calculationString.push(rowData);
            }
          }
          /* if (this.mainText === '0') {
            this.mainText = rowData;
            this.subText = rowData;
            this.operand1 = parseFloat(rowData);
          } else {
            if (rowData === ',' || (this.mainText.includes(',') && this.mainText.length < 3)) {
              this.mainText += rowData;
              this.subText = this.subText.length > 2 ? this.subText + rowData : this.mainText;
              this.operand1 = parseFloat(this.mainText.replace(',', '.'));
            } else {
              this.subText += rowData;
              this.mainText = rowData;
            }
          } */
        }
      }
    }
  }

  getAnswer(lastValue: string) {
    //this.calculationString = this.subText;
    //let parse = this.chooseOperator();
    //this.operand2 = lastValue.includes(',') ? parseFloat(lastValue.replace(',', '.')) : parseFloat(parse);
    switch (this.typeOfCalc) {
      case '/':
        this.mainText = (this.operand1 / this.operand2).toString();
        this.subText = this.mainText + lastValue;
        this.typeOfCalc = lastValue;
        break;
      case 'X':
        this.mainText = (this.operand1 * this.operand2).toString();
        this.subText = this.mainText + lastValue;
        this.typeOfCalc = lastValue;
        break;
      case '-':
        this.mainText = (this.operand1 - this.operand2).toString();
        this.subText = this.mainText + lastValue;
        this.typeOfCalc = lastValue;
        break;
      case '+':
        this.mainText = (this.operand1 + this.operand2).toString();
        this.subText = this.mainText + lastValue;
        this.typeOfCalc = lastValue;
        break;
      /* case '%':
        this.mainText = (this.operand1 * 100).toString();
        this.subText = this.mainText
        break; */
    }
  }


  resetAll() {
    this.subText = '';
    this.mainText = '0';
    this.operand1 = 0;
    this.operand2 = 0;
    this.calculationString = [];
    this.typeOfCalc = '';
  }
}
