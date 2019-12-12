import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngStyle';

  serverStatus : string = "offline";
  serverId : number = 10;

  constructor(){
     this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus(){
     return this.serverStatus;
  }

  getColor(){
     return this.serverStatus === "online" ? "green" : "red";
  }

}
