import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-with-template',
  // templateUrl: './component-with-template.component.html',
  styleUrls: ['./component-with-template.component.css'],
  template: " <h1>{{ greetUser }} </h1> "
          + "<h3>I am from template <u>( This is an example of String inter-polation)</u></h3>"
})
export class ComponentWithTemplateComponent implements OnInit {

  greetUser: string = "";
  constructor() {
    this.greetUser = "Hello User, "
  }

  ngOnInit() {
  }

}
