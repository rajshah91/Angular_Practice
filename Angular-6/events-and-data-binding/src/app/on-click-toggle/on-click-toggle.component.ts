import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-click-toggle',
  templateUrl: './on-click-toggle.component.html',
  styleUrls: ['./on-click-toggle.component.css']
})
export class OnClickToggleComponent implements OnInit {

  isToggle : boolean = true;
  toggleTitle : string = "Hide Detail";
  
  constructor() { }

  toggleData(){
    this.isToggle = !this.isToggle;
    this.toggleTitle = this.isToggle ? "Hide Detail" : "Show Detail";
  }

  ngOnInit() {
  }

}
