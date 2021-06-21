import { Injectable } from '@angular/core';
import { educationLoan } from '../../models/education-loan.model';
import { personalHomeLoan } from '../../models/personal-home-loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  custId;
  constructor() { 
    
  }

  educationalLoan:educationLoan[]=[];
  personalHomeLoan:personalHomeLoan[]=[];


  //add education loan details
  educationLoanAdd(loan:educationLoan)
  {
    this.educationalLoan.push(loan);
  }

  //add personal home loan details
  personalHomeLoanAdd(loan:personalHomeLoan)
  {
    this.personalHomeLoan.push(loan);
  }

  //get education loan details of a particular user
  getEduactionLoanDetails()
  {
      this.custId=sessionStorage.getItem("custId");
      let eduLoan=this.educationalLoan.filter(l=>l.customerId==this.custId);
      return eduLoan;
  }

  //get personal loan details of a particular user
  getPersonalLoanDetails()
  {
      this.custId=sessionStorage.getItem("custId");
      let perLoan=this.personalHomeLoan.filter(l=>l.customerId==this.custId);
      return perLoan;
  }
}
