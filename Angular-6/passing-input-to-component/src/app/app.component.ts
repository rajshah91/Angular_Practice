import { Component } from '@angular/core';
import { Customer } from './component-input-pass-using-model/Customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passing-input-to-component';
  
  customer : Customer;

  constructor(){
      this.customer = new Customer();
      this.customer.customerId = "1";
      this.customer.customerName = "Suresh";
      this.customer.customerPhone = "458768886887";
      this.customer.customerAddress = "Surat";
  }
}
