import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-intro';

  homeRoute = "home";
  contactRoute = "contact";
  settingRoute ="setting";

  routes = [
    { linkName : "Home" , URL : "home"},
    { linkName : "Contact" , URL : "contact"},
    { linkName : "Setting" , URL : "setting"}
  ]
}
