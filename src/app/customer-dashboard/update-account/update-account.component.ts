import { Component, OnInit } from '@angular/core';
import { account } from 'src/app/models/account.model';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  acc:account;
  idenTypePAN=false;
  idenTypeAadhar=false;
  
  constructor(private customerService:CustomerService,private router:Router,public datepipe:DatePipe) { }
  
  customerId=sessionStorage.getItem("custId");
  citizenStatus;

  updateForm:FormGroup;
  ngOnInit(): void {

    this.acc=this.customerService.getUserById(this.customerId);
    this.acc?.identificationType==="PAN"?this.idenTypePAN=true:this.idenTypeAadhar=true;
    this.citizenStatus = this.acc?.citizenStatus;

    //initializing validations
    this.updateForm  = new FormGroup({
      'customerId': new FormControl({value:this.acc?.customerId,disabled:true},[Validators.required]),
      'accountNumber': new FormControl({value:this.acc?.accountNumber,disabled:true},[Validators.required]),
      'name': new FormControl({value:this.acc?.name,disabled:false},[Validators.required,Validators.pattern(/^[a-z ]+$/i)]),
      'email': new FormControl({value:this.acc?.email,disabled:false},[Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]),
      'contactNumber': new FormControl({value:this.acc?.contactNumber,disabled:false},[Validators.required,Validators.pattern(/^[6-9][0-9]{9}$/i)]),
      'username': new FormControl({value:this.acc?.username,disabled:false},[Validators.required]),
      'gender': new FormControl({value:this.acc?.gender,disabled:false},[Validators.required]),
      'dateOfBirth': new FormControl({value:this.acc?.dateOfBirth,disabled:false},[Validators.required]),
      'maritalStatus': new FormControl({value:this.acc?.maritalStatus,disabled:false},[Validators.required]),
      'guardianType': new FormControl({value:this.acc?.guardianType,disabled:false},[Validators.required]),
      'guardianName': new FormControl({value:this.acc?.guardianName,disabled:false},[Validators.required]),
      'address': new FormControl({value:this.acc?.address,disabled:false},[Validators.required]),
      'citizenship': new FormControl({value:this.acc?.citizenship,disabled:false},[Validators.required]),
      'country': new FormControl({value:this.acc?.country,disabled:false},[Validators.required]),
      'state': new FormControl({value:this.acc?.state,disabled:false},[Validators.required]),
      'accountType': new FormControl({value:this.acc?.accountType,disabled:false},[Validators.required]),
      'branchName': new FormControl({value:this.acc?.branchName,disabled:false},[Validators.required]),
      'identificationType': new FormControl({value:this.acc?.identificationType,disabled:true},[Validators.required]),
      'identificationDocumentNumber': new FormControl({value:this.acc?.identificationDocumentNumber,disabled:false},[Validators.required]),
      'referenceAccountHolderName': new FormControl({value:this.acc?.referenceAccountHolderName,disabled:false},[Validators.required]),
      'referenceAccountHolderAccountNumber': new FormControl({value:this.acc?.referenceAccountHolderAccountNumber,disabled:false},[Validators.required,Validators.pattern(/^[0-9]{16}$/)]),
      'referenceAccountHolderAddress': new FormControl({value:this.acc?.referenceAccountHolderAddress,disabled:false},[Validators.required]),
      'citizenStatus': new FormControl({value:this.acc?.citizenStatus,disabled:true},[Validators.required])  
  });

  }

  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());

  registrationDate = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior = this.datepipe.transform(this.senior1, 'yyyy-MM-dd');


  buttonInvalid=false;

  //username validation
  Usernames:string[]=this.customerService.getAllUsernames();
  invalidUsername=false;
  CheckUserName(value){
    (this.Usernames.some(u=>u===value))?this.invalidUsername=true:this.invalidUsername=false;
    this.buttonInvalid=this.invalidUsername||this.invalidPAN||this.invalidAadhar;
  }


  //PAN validation
  invalidPAN=false;
  CheckPAN(value){
    (!/^[A-Z0-9]{12}$/.test(value))?this.invalidPAN=true:this.invalidPAN=false;
    this.buttonInvalid=this.invalidUsername||this.invalidPAN||this.invalidAadhar;
  }

  //Aadhar validation
  invalidAadhar=false;
  CheckAadhar(value){
    (!/^[0-9]{12}$/.test(value))?this.invalidAadhar=true:this.invalidAadhar=false;
    this.buttonInvalid=this.invalidUsername||this.invalidPAN||this.invalidAadhar;
  }


  //citizenstatus setting
  CitizenStatus(value)
  {
    value< this.senior?this.citizenStatus = "senior":this.citizenStatus = "adult";
  }


  updateSuccess=false;

  //onSubmit updateDetails
  updateDetails() {
    this.updateForm.value.citizenStatus=this.citizenStatus;
    this.customerService.updateUser(this.updateForm.value);
    this.updateSuccess=true;
    
    var FormID = 'updateForm';
    var resetForm = <HTMLFormElement>document.getElementById(FormID);
    resetForm.reset();

    this.router.navigateByUrl("/update-account");
    }
}
