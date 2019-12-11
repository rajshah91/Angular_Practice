import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection';

  //this is dependency Injection
  //dependency is injected via constructor 
  //and since service is @Injectable so we need not to create object manually
  constructor(private tsvc : TestServiceService){
      tsvc.createAlert("I have been called from Main App Component");
      tsvc.printToConsole("I have been called from Main App Component");
  }
}
