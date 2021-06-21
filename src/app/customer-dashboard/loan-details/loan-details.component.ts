import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/LoanService/loan.service';
import { educationLoan } from 'src/app/models/education-loan.model';
import { personalHomeLoan } from 'src/app/models/personal-home-loan.model';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(private loanService:LoanService) { }

  eduLoan:educationLoan[];
  perLoan:personalHomeLoan[];

  edulength;
  perlength;

  eduNoData;
  perNoData;

  ngOnInit(): void {
    this.eduLoan=this.loanService.getEduactionLoanDetails();
    this.perLoan=this.loanService.getPersonalLoanDetails();

    this.edulength=this.eduLoan.length;
    this.perlength=this.perLoan.length;

    this.edulength>0?this.eduNoData=false:this.eduNoData=true;
    this.perlength>0?this.perNoData=false:this.perNoData=true;
  }

  

}
