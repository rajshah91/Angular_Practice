import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-binding',
  // templateUrl: './propert-binding.component.html',
  styleUrls: ['./propert-binding.component.css'],

  template : " <h1 [innerHtml]='greetUser'></h1>  "
        +"<button [disabled]='isDisabled'>Enable me</button> "
        +"<h3>This is an example of property binding <br/>"+
        "Property Binding is used when you have to set an element property to a non-string data value.</h3>"
})
export class PropertBindingComponent implements OnInit {

  isDisabled : boolean = true;
  greetUser : string ="";
  constructor() { 
    this.greetUser = " <u>Kem chho Mota bhai ? </u>"
  }

  ngOnInit() {
  }

}
