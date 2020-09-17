import { Output } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorPage {
  newValue: number;
  oldValue: number;
  financedAmount:number;
  paymentTerms: number;
  totalInterestPayable: number;
  interestRate: 0.013;
  monthlyPayment: number;

  constructor(public navCtrl: NavController) {

  }
compute() {
 this.financedAmount = (this.newValue - this.oldValue);
 this.totalInterestPayable = (this.financedAmount * 0.0130 / 100) * this.paymentTerms;
 this.monthlyPayment = (this.financedAmount - this.totalInterestPayable) / this.paymentTerms;
}
}