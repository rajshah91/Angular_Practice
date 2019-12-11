import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  user : any;
  constructor() {
    this.user=[{
      name : "Raj",
      company : "Infosys",
      city : "Baroda",
      phone : ["9049519768","1234567890"]
    },{
      name : "Alia",
      company : "TCS",
      city : "Pune",
      phone : []
    },{
      name : "Deepika",
      company : "Wipro",
      city : "GandhiNagar",
      phone : ["1378961334"]
    }]
   }

  ngOnInit() {
  }

}
