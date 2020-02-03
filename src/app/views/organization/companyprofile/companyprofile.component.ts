import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
  public data = [
      {name: 'therichpost1', email: 'therichpost1@gmail.com', website:'therichpost1.com'},
      {name: 'therichpost2', email: 'therichpost2@gmail.com', website:'therichpost2.com'},
      {name: 'therichpost3', email: 'therichpost3@gmail.com', website:'therichpost3.com'},
      {name: 'therichpost4', email: 'therichpost4@gmail.com', website:'therichpost4.com'},
  ];
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }

}
