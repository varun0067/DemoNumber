import { TestBed } from '@angular/core/testing';

import { LoanService } from './loan.service';
import { educationLoan } from 'src/app/models/education-loan.model';
import { personalHomeLoan } from 'src/app/models/personal-home-loan.model';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add education loan details on apply educationloan',()=>{
    const educationloan=new educationLoan(
      "R-111",
      "57000",
      new Date(),
      new Date(),
      "10",
      "5",
      "500000",
      "BE",
      "Manoj",
      "Photographer",
      "20",
      "14",
      "123456",
      "600000");

      const count=service.educationalLoan.length;
      service.educationLoanAdd(educationloan);

      expect(service.educationalLoan.length).toBe(count+1);
  })

  it('should add personal loan details on apply personalloan',()=>{
    const personalloan=new personalHomeLoan(
      "R-111",
      "57000",
      new Date(),
      new Date(),
      "8",
      "5",
      "500000",
      "cts",
      "pat",
      "4",
      "2"
    );

      const count=service.personalHomeLoan.length;
      service.personalHomeLoanAdd(personalloan);

      expect(service.personalHomeLoan.length).toBe(count+1);
  })
});
