import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLoanComponent } from './apply-loan.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';

describe('ApplyLoanComponent', () => {
  let component: ApplyLoanComponent;
  let fixture: ComponentFixture<ApplyLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ApplyLoanComponent],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the amount control required',() =>{
    let control = component.applyPersonalLoanForm.get('amount');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('amount control should contain value grater than or equal to 50000',() =>{
    let control = component.applyPersonalLoanForm.get('amount');
    control.setValue('48000');
    expect(control.valid).toBeFalsy();
  });

  it('amount control should contain value grater than or equal to 50000',() =>{
    let control = component.applyPersonalLoanForm.get('amount');
    control.setValue('50000');
    expect(control.valid).toBeTruthy();
  });
  

  it('should make the loanApplyDate control required',() =>{
    let control = component.applyPersonalLoanForm.get('loanApplyDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the loanIssueDate control required',() =>{
    let control = component.applyPersonalLoanForm.get('loanIssueDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the durationOfLoan control required',() =>{
    let control = component.applyPersonalLoanForm.get('durationOfLoan');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the rateOfInterest control required',() =>{
    let control = component.applyPersonalLoanForm.get('rateOfInterest');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the annualIncome control required',() =>{
    let control = component.applyPersonalLoanForm.get('annualIncome');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the companyName control required',() =>{
    let control = component.applyPersonalLoanForm.get('companyName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the designation control required',() =>{
    let control = component.applyPersonalLoanForm.get('designation');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the totalExperience control required',() =>{
    let control = component.applyPersonalLoanForm.get('totalExperience');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('totalExperience control max value can be 40',() =>{
    let control = component.applyPersonalLoanForm.get('totalExperience');
    control.setValue('45');
    expect(control.valid).toBeFalsy();
  });

  it('totalExperience control max value can be 40',() =>{
    let control = component.applyPersonalLoanForm.get('experienceWithCurrentCompany');
    control.setValue('40');
    expect(control.valid).toBeTruthy();
  });

  it('should make the amount control required',() =>{
    let control = component.applyEducationLoanForm.get('amount');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('amount control should contain value grater than or equal to 50000',() =>{
    let control = component.applyEducationLoanForm.get('amount');
    control.setValue('48000');
    expect(control.valid).toBeFalsy();
  });

  it('amount control should contain value grater than or equal to 50000',() =>{
    let control = component.applyEducationLoanForm.get('amount');
    control.setValue('50000');
    expect(control.valid).toBeTruthy();
  });

  it('should make the loanApplyDate control required',() =>{
    let control = component.applyEducationLoanForm.get('loanApplyDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the loanIssueDate control required',() =>{
    let control = component.applyEducationLoanForm.get('loanIssueDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the durationOfLoan control required',() =>{
    let control = component.applyEducationLoanForm.get('durationOfLoan');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the rateOfInterest control required',() =>{
    let control = component.applyEducationLoanForm.get('rateOfInterest');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the courseFee control required',() =>{
    let control = component.applyEducationLoanForm.get('courseFee');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the course control required',() =>{
    let control = component.applyEducationLoanForm.get('course');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the fatherName control required',() =>{
    let control = component.applyEducationLoanForm.get('fatherName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the fatherOccupation control required',() =>{
    let control = component.applyEducationLoanForm.get('fatherOccupation');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the fatherTotalExperience control required',() =>{
    let control = component.applyEducationLoanForm.get('fatherTotalExperience');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('fatherTotalExperience control max value can be 40',() =>{
    let control = component.applyEducationLoanForm.get('fatherTotalExperience');
    control.setValue('45');
    expect(control.valid).toBeFalsy();
  });

  it('fatherTotalExperience control max value can be 40',() =>{
    let control = component.applyEducationLoanForm.get('fatherTotalExperience');
    control.setValue('40');
    expect(control.valid).toBeTruthy();
  });

  it('should make the fatherExperienceInCurrentCompany control required',() =>{
    let control = component.applyEducationLoanForm.get('fatherExperienceInCurrentCompany');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the rationCardNumber control required',() =>{
    let control = component.applyEducationLoanForm.get('rationCardNumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('rationCardNumber control shold contain exactly 6 digits',() =>{
    let control = component.applyEducationLoanForm.get('rationCardNumber');
    control.setValue('12edrw');
    expect(control.valid).toBeFalsy();
  });

  it('rationCardNumber control shold contain exactly 6 digits',() =>{
    let control = component.applyEducationLoanForm.get('rationCardNumber');
    control.setValue('125');
    expect(control.valid).toBeFalsy();
  });

  it('rationCardNumber control shold contain exactly 6 digits',() =>{
    let control = component.applyEducationLoanForm.get('rationCardNumber');
    control.setValue('125879');
    expect(control.valid).toBeTruthy();
  });

  it('should make the annualIncome control required',() =>{
    let control = component.applyEducationLoanForm.get('annualIncome');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  

});
