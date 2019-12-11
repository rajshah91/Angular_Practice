import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  templateUrl: './one-way-data-binding.component.html',
  styleUrls: ['./one-way-data-binding.component.css']
})
export class OneWayDataBindingComponent implements OnInit {

  textInput : string = "One way data binding example";
  
  constructor() { }

  ngOnInit() {
  }

}
