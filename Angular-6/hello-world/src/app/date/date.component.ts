import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  currentdate : string = new Date().toDateString();
  currentdatetime : string ;
  tempNumber : number = 10;
  
  constructor() { 
    setInterval(() => {
      let currenttime= new Date();
      this.currentdatetime = currenttime.toDateString() + " - "+ currenttime.toLocaleTimeString();
    },1000);
  }

  ngOnInit() {
  }

  addTwoNumber(n1 : number ,n2 : number){
    return n1+n2;
  }

}
