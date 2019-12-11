import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-input-pass',
  templateUrl: './component-input-pass.component.html',
  styleUrls: ['./component-input-pass.component.css']
})
export class ComponentInputPassComponent implements OnInit {

  user : any;
  @Input('name') userName : string;
  @Input('phone') userPhone : string;

  constructor() { }

  ngOnInit() {
    this.user = {
      name : this.userName,
      mobile : this.userPhone
    }
  }

}
