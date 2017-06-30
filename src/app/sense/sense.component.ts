import { Component, OnInit} from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sense',
  templateUrl: './sense.component.html',
  styleUrls: ['./sense.component.css']
})
export class SenseComponent implements OnInit {
  start: number;
  startLow: number;
  startHigh: number;
  startLowBool: boolean = false;
  startHighBool: boolean = false;

  two: number;
  twoLow: number;
  twoHigh: number;
  twoLowBool: boolean = false;
  twoHighBool: boolean = false;

  three: number;
  threeLow: number;
  threeHigh: number
  threeLowBool: boolean = false;
  threeHighBool: boolean = false;

  four: number;
  fourLow: number;
  fourHigh: number;
  fourLowBool: boolean = false;
  fourHighBool: boolean = false;

  five: number;
  fiveLow: number;
  fiveHigh: number;
  fiveLowBool: boolean = false;
  fiveHighBool: boolean = false;

  six: number;
  sixLow: number;
  sixHigh: number;
  sixLowBool: boolean = false;
  sixHighBool: boolean = false;

  seven: number;
  sevenLow: number;
  sevenHigh: number;
  sevenLowBool: boolean = false;
  sevenHighBool: boolean = false;
  final: number;

  constructor() { }

  ngOnInit() {
  }


  calculateStart(start){
    this.startLow = Math.round((this.start*0.5)*100)/100;
    this.startHigh = Math.round((this.start*1.5)*100)/100;
  }

  rowOne(selected){
    this.startLowBool = this.startHighBool = false;
    if(selected == 'low'){
      this.startLowBool = true;
      this.two = Math.round((this.start + this.start*0.5)/2*100)/100;
    } else {
      this.startHighBool = true;
      this.two = Math.round((this.start + this.start*1.5)/2*100)/100
    }
    this.twoLow = Math.round((this.two*0.5)*100)/100;
    this.twoHigh = Math.round((this.two*1.5)*100)/100;
  }


  rowTwo(selected){
    this.twoLowBool = this.twoHighBool = false;
    if(selected == 'low'){
      this.twoLowBool = true;
      this.three = Math.round((this.two + this.two*0.5)/2*100)/100;
    } else {
      this.twoHighBool = true;
      this.three = Math.round((this.two + this.two*1.5)/2*100)/100
    }
    this.threeLow = Math.round((this.three*0.5)*100)/100;
    this.threeHigh = Math.round((this.three*1.5)*100)/100;
  }

  rowThree(selected){
    this.threeLowBool = this.threeHighBool = false;
    if(selected == 'low'){
      this.threeLowBool = true;
      this.four = Math.round((this.three + this.three*0.6)/2*100)/100;
    } else {
      this.threeHighBool = true;
      this.four = Math.round((this.three + this.three*1.4)/2*100)/100
    }
    this.fourLow = Math.round((this.four*0.6)*100)/100;
    this.fourHigh = Math.round((this.four*1.4)*100)/100;
  }


  rowFour(selected){
    this.fourLowBool = this.fourHighBool = false;
    if(selected == 'low'){
      this.fourLowBool = true;
      this.five = Math.round((this.four + this.four*0.7)/2*100)/100;
    } else {
      this.fourHighBool = true;
      this.five = Math.round((this.four + this.four*1.3)/2*100)/100
    }
    this.fiveLow = Math.round((this.five*0.7)*100)/100;
    this.fiveHigh = Math.round((this.five*1.3)*100)/100;
  }


  rowFive(selected){
    this.fiveLowBool = this.fiveHighBool = false;
    if(selected == 'low'){
      this.fiveLowBool = true;
      this.six = Math.round((this.five + this.five*0.8)/2*100)/100;
    } else {
      this.fiveHighBool = true;
      this.six = Math.round((this.five + this.five*1.2)/2*100)/100
    }
    this.sixLow = Math.round((this.six*0.8)*100)/100;
    this.sixHigh = Math.round((this.six*1.2)*100)/100;
  }

  // rowFiveLow(){
  //   this.six = Math.round((this.five + this.five*0.8)/2*100)/100
  // }
  // rowFiveHigh(){
  //   this.six = Math.round((this.five + this.five*1.2)/2*100)/100
  // }

  rowSix(selected){
    this.sixLowBool = this.sixHighBool = false;
    if(selected == 'low'){
      this.sixLowBool = true;
      this.seven = Math.round((this.six + this.six*0.9)/2*100)/100;
    } else {
      this.sixHighBool = true;
      this.seven = Math.round((this.six + this.six*1.1)/2*100)/100
    }
    this.sevenLow = Math.round((this.seven*0.9)*100)/100;
    this.sevenHigh = Math.round((this.seven*1.1)*100)/100;
  }

  // rowSixLow(){
  //   this.seven = Math.round((this.six + this.six*0.9)/2*100)/100
  // }
  // rowSixHigh(){
  //   this.seven = Math.round((this.six + this.six*1.1)/2*100)/100
  // }

  rowSeven(selected){
    this.sevenLowBool = this.sevenHighBool = false;
    if(selected == 'low'){
      this.sevenLowBool = true;
      this.final = Math.round((this.seven + this.seven*0.95)/2*100)/100;
    } else {
      this.sevenHighBool = true;
      this.final = Math.round((this.seven + this.seven*1.05)/2*100)/100
    }
  }
  // rowSevenLow(){
  //   this.final = Math.round((this.seven + this.seven*0.95)/2*100)/100
  // }
  // rowSevenHigh(){
  //   this.final = Math.round((this.seven + this.seven*1.05)/2*100)/100
  // }

}
