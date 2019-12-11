import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor() { }

  printToConsole(arg: any){
    console.log(arg);
  }

  createAlert(arg: string){
    alert(arg);
  }

}
