import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(private tsvc : TestServiceService) { 

    tsvc.printToConsole("I have been called from TestComponent");
    tsvc.createAlert("I have been called from TestComponent");

  }

  ngOnInit() {
  }

}
