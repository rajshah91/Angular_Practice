import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'making-REST-calls-with-HttpClient';

  constructor(private httpclnt : HttpClient){
      alert("HttpClient Service Instantiated");
  }

  ngOnInit(){
      // let response =this.httpclnt.get("https://api.github.com/users/rajshah91");
      // Above will not work since it is a async call so we can't assign value to variable
      //that means we can assign but we will not get response value into it

      //So to overcome this,observable is introduced.

      let response= this.httpclnt.get("https://api.github.com/users/rajshah91");
      response.subscribe(( res ) => alert("Got this response : "+res)); 
      //here subscribe method is an observable.So it means after completing async call,perform another operation

      
  }

}
