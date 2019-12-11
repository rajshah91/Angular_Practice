import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './Customer.model';

@Component({
  selector: 'app-component-input-pass-using-model',
  templateUrl: './component-input-pass-using-model.component.html',
  styleUrls: ['./component-input-pass-using-model.component.css']
})
export class ComponentInputPassUsingModelComponent implements OnInit {

  customer : any;
  @Input('customer') customerInputObj : Customer;

  constructor() { }

  ngOnInit() {
    // alert("this.customerInputObj.customerId")
    this.customer ={
      customerId : this.customerInputObj.customerId,    
      customerName : this.customerInputObj.customerName, 
      customerPhone: this.customerInputObj.customerPhone,
      customerAddress: this.customerInputObj.customerAddress
    }
     
  }

}
