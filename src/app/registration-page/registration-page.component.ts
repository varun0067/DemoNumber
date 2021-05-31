import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from '../models/account.model';
import { DatePipe } from '@angular/common'
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  newaccount:account;
  idenTypePAN=false;
  idenTypeAadhar=false;

  

  constructor(private router:Router,public datepipe:DatePipe,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());

  today = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior = this.datepipe.transform(this.senior1, 'yyyy-MM-dd');

  initialDepositAmount = "0";
  citizenStatus = "adult";

  

  getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  createArrayOfNumbers(start,end)
  {
    let array=[];

    for(let i=start;i<=end;i++)
    {
      array.push(i);
    }
    return array;
  }

  customerIdArray=this.createArrayOfNumbers(100,999);
  // accountNumberArray=this.createArrayOfNumbers(1000000000000000,9999999999999999);

  randomCustIndex=this.getRandomNumber(0,this.customerIdArray.length-1);
  // randomAccIndex=this.getRandomNumber(0,this.accountNumberArray.length-1);

  RandomCustNumber=this.customerIdArray[this.randomCustIndex];
  n=this.customerIdArray.splice(this.randomCustIndex,1);

  // RandomAccNumber=this.accountNumberArray[this.randomAccIndex];
  // m=this.accountNumberArray.splice(this.randomAccIndex,1);

  CustomerId="R-"+this.RandomCustNumber;
  RandomAccNumber=this.getRandomNumber(1000000000000000,9999999999999999);

  dropIdenNumber(value)
  {
    if(value==="PAN")
    {
      this.idenTypePAN=true;
      this.idenTypeAadhar=false;
    }
    else
    {
      this.idenTypeAadhar=true;
      this.idenTypePAN=false;
    }
  }

  onSubmit(value) {

    if (value.accountType == "saving") {
      this.initialDepositAmount = "5000";
    }

    if (value.dateOfBirth < this.senior) {
      this.citizenStatus = "senior";
    }
    this.newaccount = new account(
      this.CustomerId,
      ""+this.RandomAccNumber,
      value.name,
      value.username,
      value.password,
      value.guardianType,
      value.guardianName,
      value.address,
      value.citizenship,
      value.state,
      value.country,
      value.email,
      value.gender,
      value.maritalStatus,
      value.contactNumber,
      value.dateOfBirth,
      value.registrationDate,
      value.accountType,
      value.branchName,
      this.citizenStatus,
      this.initialDepositAmount,
      value.identificationType,
      value.identificationDocumentNumber,
      value.referenceAccountHolderName,
      value.referenceAccountHolderAccountNumber,
      value.referenceAccountHolderAddress
    );

    this.customerService.onCreate(this.newaccount);

    //this.jsonStr=JSON.stringify(this.acc);
    //theAccountList.addAccount(this.acc);
    this.router.navigateByUrl("/");

  }

}
