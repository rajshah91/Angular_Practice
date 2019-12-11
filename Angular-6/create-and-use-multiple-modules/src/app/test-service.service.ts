import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  printToConsole(){
    console.log("I am from TestServiceService Class(Service)")
  }
}
