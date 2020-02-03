import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public formdata:any;
  public registerofficeaddr:any;
  public bankdetails:any;
  public directors:any;
  public auditors:any;
  public companysecretary:any;
  constructor() { 
    this.registerofficeaddr={address:'',pincode:'',statecountry:'',country:''};
    this.bankdetails={address:'',pincode:'',statecountry:'',country:''};
    this.directors={directorsname:'',directorsemailid:'',directorsdin:'',directorsphoneno:''};
    this.auditors={auditorsname:'',auditorsemailid:'',auditorstype:'',auditorsphoneno:''};
    this.companysecretary={companysecretaryname:'',companysecretaryemailid:'',companysecretaryphoneno:''};
  }

  ngOnInit(): void {
    this.formdata={};
    this.formdata.registeroffice=[this.registerofficeaddr];
    this.formdata.bankdetails=[this.bankdetails];
    this.formdata.directors=[this.directors];
    this.formdata.auditors=[this.auditors];
    this.formdata.companysecretary=[this.companysecretary];
  }
  prevTab(event: any, id:any) {
    $('tab').removeClass('active');
    $('.nav-item').removeClass('active');
    $('.nav-link').removeClass('active');
    $('tab').removeClass('active');
    $('#'+id).addClass('active');
    $('#'+id+'-link').parent().addClass('active');
    $('#'+id+'-link').addClass('active');
    
  }
  formsubmit(event: any, id:any){
    $('tab').removeClass('active');
    $('.nav-item').removeClass('active');
    $('.nav-link').removeClass('active');
    $('tab').removeClass('active');
    $('#'+id).addClass('active');
    $('#'+id+'-link').parent().addClass('active');
    $('#'+id+'-link').addClass('active');
  }

  addAddressValue(index:any,key:any){
    this.formdata.registeroffice.push(this.registerofficeaddr);
  }
  deleteAddressValue(index:any,key:any){
    this.formdata.registeroffice.splice(index, 1);
  }  
  
  addBankValue(index:any){
    this.formdata.bankdetails.push(this.bankdetails);
  }
  deleteBankValue(index:any){
    this.formdata.bankdetails.splice(index, 1);
  }  

  addDirectorsValue(index:any){
    this.formdata.directors.push(this.directors);
  }
  deleteDirectorsValue(index:any){
    this.formdata.directors.splice(index, 1);
  }

  addAuditorsValue(index:any){
    this.formdata.auditors.push(this.auditors);
  }
  deleteAuditorsValue(index:any){
    this.formdata.auditors.splice(index, 1);
  }

  addCompanysecretaryValue(index:any){
    this.formdata.companysecretary.push(this.companysecretary);
  }
  deleteCompanysecretaryValue(index:any){
    this.formdata.companysecretary.splice(index, 1);
  }
}
