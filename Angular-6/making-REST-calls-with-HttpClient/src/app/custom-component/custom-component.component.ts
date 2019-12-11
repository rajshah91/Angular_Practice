import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent implements OnInit {

  username: string = "";
  apiResponse : any ;

  constructor(private httpClient: HttpClient) {
    
  }

  ngOnInit() {

  }

  searchRepo() {
    if (this.username != undefined && this.username != null && this.username !== "") {
      this.apiResponse = null ;
      let res = this.httpClient.get("https://api.github.com/users/" + this.username);
      res.subscribe((response) => {
        this.apiResponse = response;
      });
    }

  }

}
