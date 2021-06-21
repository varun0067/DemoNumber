import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/services/LoanService/loan.service';
import { educationLoan } from 'src/app/models/education-loan.model';
import { personalHomeLoan } from 'src/app/models/personal-home-loan.model';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  constructor(private router:Router,private loanService:LoanService) { }

  applyPersonalLoanForm:FormGroup;
  applyEducationLoanForm:FormGroup;

  ngOnInit(): void {
    //initializing validators
    this.applyPersonalLoanForm  = new FormGroup({
      'amount': new FormControl('',[Validators.required,Validators.min(50000)]),
      'loanApplyDate': new FormControl('',[Validators.required]),
      'loanIssueDate': new FormControl('',[Validators.required]),
      'durationOfLoan': new FormControl('',[Validators.required]),
      'rateOfInterest': new FormControl('',[Validators.required]),
      'annualIncome': new FormControl('',[Validators.required]),
      'companyName': new FormControl('',[Validators.required]),
      'designation': new FormControl('',[Validators.required]),
      'totalExperience': new FormControl('',[Validators.required,Validators.max(40)]),
      'experienceWithCurrentCompany': new FormControl('',[Validators.required])
  });

  this.applyEducationLoanForm  = new FormGroup({
    'amount': new FormControl('',[Validators.required,Validators.min(50000)]),
    'loanApplyDate': new FormControl('',[Validators.required]),
    'loanIssueDate': new FormControl('',[Validators.required]),
    'durationOfLoan': new FormControl('',[Validators.required]),
    'rateOfInterest': new FormControl('',[Validators.required]),
    'courseFee': new FormControl('',[Validators.required]),
    'course': new FormControl('',[Validators.required]),
    'fatherName': new FormControl('',[Validators.required]),
    'fatherOccupation': new FormControl('',[Validators.required]),
    'fatherTotalExperience': new FormControl('',[Validators.required,Validators.max(40)]),
    'fatherExperienceInCurrentCompany': new FormControl('',[Validators.required]),
    'rationCardNumber': new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{6}$/)]),
    'annualIncome': new FormControl('',[Validators.required])
});
  }

  today = new Date();

  //binding for hidden form
  loanTypeSelected = "";

  educationalLoan:educationLoan;
  personalHomeLoan:personalHomeLoan;
  
  custId;
  applyLoanSuccess=false;
  applyLoanFail=false;
  
  //onSubmit applyEducationLoan
  applyEducationLoan() {

    if(this.checkLowAnnualIncome(this.applyEducationLoanForm.value.annualIncome))
    {
      this.applyLoanFail=true;
    }
    else{
      this.custId=sessionStorage.getItem("custId");
      
        this.educationalLoan=new educationLoan(
        this.custId,
        this.applyEducationLoanForm.value.amount,
        this.applyEducationLoanForm.value.loanApplyDate,
        this.applyEducationLoanForm.value.loanIssueDate,
        "10",
        this.applyEducationLoanForm.value.durationOfLoan,
        this.applyEducationLoanForm.value.courseFee,
        this.applyEducationLoanForm.value.course,
        this.applyEducationLoanForm.value.fatherName,
        this.applyEducationLoanForm.value.fatherOccupation,
        this.applyEducationLoanForm.value.fatherTotalExperience,
        this.applyEducationLoanForm.value.fatherExperienceInCurrentCompany,
        this.applyEducationLoanForm.value.rationCardNumber,
        this.applyEducationLoanForm.value.annualIncome);

        this.loanService.educationLoanAdd(this.educationalLoan);

      this.applyLoanSuccess=true;
  }
    this.clearForm('applyEducationLoanForm');

    this.router.navigateByUrl("/apply-loan");
  }

  applyPersonalLoan() {
      if(this.checkLowAnnualIncome(this.applyPersonalLoanForm.value.annualIncome))
      {
        this.applyLoanFail=true;
      }
      else{
      this.custId=sessionStorage.getItem("custId");
      
        this.personalHomeLoan=new personalHomeLoan(
        this.custId,
        this.applyPersonalLoanForm.value.amount,
        this.applyPersonalLoanForm.value.loanApplyDate,
        this.applyPersonalLoanForm.value.loanIssueDate,
        "8",
        this.applyPersonalLoanForm.value.durationOfLoan,
        this.applyPersonalLoanForm.value.annualIncome,
        this.applyPersonalLoanForm.value.companyName,
        this.applyPersonalLoanForm.value.designation,
        this.applyPersonalLoanForm.value.totalExperience,
        this.applyPersonalLoanForm.value.experienceWithCurrentCompany);
        
        this.loanService.personalHomeLoanAdd(this.personalHomeLoan);
    
      this.applyLoanSuccess=true;
    }
      this.clearForm('applyPersonalLoanForm');
  
      this.router.navigateByUrl("/apply-loan");
    }

    clearForm(formName){
      var resetForm = <HTMLFormElement>document.getElementById(formName);
      resetForm.reset();
    }

    checkLowAnnualIncome(income:number){
      var res=false;
      income<200000? res=true:res=false;
      return res;
    }

}
