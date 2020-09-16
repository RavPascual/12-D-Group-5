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
  financedAmount: number;
  totalInterestPayable: number;
  interestRate: 1.30;
  paymentTerms: number;
  monthlyPayment: number;

  constructor(public navCtrl: NavController) {

  }
compute() {
  this.financedAmount = (this.newValue - this.oldValue)
}
compute1() {
  this.totalInterestPayable = (this.financedAmount * this.interestRate / 100) * this.paymentTerms
}
compute2() {
  this.monthlyPayment = (this.financedAmount - this.totalInterestPayable) / this.paymentTerms
}
}