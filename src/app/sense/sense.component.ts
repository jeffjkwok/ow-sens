import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sense',
  templateUrl: './sense.component.html',
  styleUrls: ['./sense.component.css']
})
export class SenseComponent implements OnInit {
  start: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
  seven: number;
  final: number;

  constructor() { }

  ngOnInit() {
  }

  rowOneLow(){
    this.two = Math.round((this.start + this.start*0.5)/2*100)/100
  }
  rowOneHigh(){
    this.two = Math.round((this.start + this.start*1.5)/2*100)/100
  }
  rowTwoLow(){
    this.three = Math.round((this.two + this.two*0.5)/2*100)/100
  }
  rowTwoHigh(){
    this.three = Math.round((this.two + this.two*1.5)/2*100)/100
  }
  rowThreeLow(){
    this.four = Math.round((this.three + this.three*0.6)/2*100)/100
  }
  rowThreeHigh(){
    this.four = Math.round((this.three + this.three*1.4)/2*100)/100
  }
  rowFourLow(){
    this.five = Math.round((this.four + this.four*0.7)/2*100)/100
  }
  rowFourHigh(){
    this.five = Math.round((this.four + this.four*1.3)/2*100)/100
  }
  rowFiveLow(){
    this.six = Math.round((this.five + this.five*0.8)/2*100)/100
  }
  rowFiveHigh(){
    this.six = Math.round((this.five + this.five*1.2)/2*100)/100
  }
  rowSixLow(){
    this.seven = Math.round((this.six + this.six*0.9)/2*100)/100
  }
  rowSixHigh(){
    this.seven = Math.round((this.six + this.six*1.1)/2*100)/100
  }
  rowSevenLow(){
    this.final = Math.round((this.seven + this.seven*0.95)/2*100)/100
  }
  rowSevenHigh(){
    this.final = Math.round((this.seven + this.seven*1.05)/2*100)/100
  }

}
