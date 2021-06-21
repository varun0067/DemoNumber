import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { RegistrationPageComponent } from './registration-page.component';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

describe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ RegistrationPageComponent ],
      providers:[DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create form with 23 controls',() =>{
    expect(component.registrationForm.contains('name')).toBeTruthy();
    expect(component.registrationForm.contains('email')).toBeTruthy();
    expect(component.registrationForm.contains('contactNumber')).toBeTruthy();
    expect(component.registrationForm.contains('username')).toBeTruthy();
    expect(component.registrationForm.contains('password')).toBeTruthy();
    expect(component.registrationForm.contains('gender')).toBeTruthy();
    expect(component.registrationForm.contains('dateOfBirth')).toBeTruthy();
    expect(component.registrationForm.contains('maritalStatus')).toBeTruthy();
    expect(component.registrationForm.contains('guardianType')).toBeTruthy();
    expect(component.registrationForm.contains('guardianName')).toBeTruthy();
    expect(component.registrationForm.contains('address')).toBeTruthy();
    expect(component.registrationForm.contains('citizenship')).toBeTruthy();
    expect(component.registrationForm.contains('country')).toBeTruthy();
    expect(component.registrationForm.contains('state')).toBeTruthy();
    expect(component.registrationForm.contains('accountType')).toBeTruthy();
    expect(component.registrationForm.contains('branchName')).toBeTruthy();
    expect(component.registrationForm.contains('identificationType')).toBeTruthy();
    expect(component.registrationForm.contains('registrationDate')).toBeFalsy();
    expect(component.registrationForm.contains('identificationDocumentNumber')).toBeTruthy();
    expect(component.registrationForm.contains('referenceAccountHolderName')).toBeTruthy();
    expect(component.registrationForm.contains('referenceAccountHolderAccountNumber')).toBeTruthy();
    expect(component.registrationForm.contains('referenceAccountHolderAddress')).toBeTruthy();
    expect(component.registrationForm.contains('initialDepositAmount')).toBeTruthy();
  });

  it('should redirect to same page on registrartion with success message',()=>{
    let router=TestBed.get(Router);
    let spy=spyOn(router,"navigateByUrl");
    component.register();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/registration-page");
  })

  it('name control should not contain numbers',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('abc12');
    expect(control.valid).toBeFalsy();
  });

  it('name control should not contain special charecters',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('abc@ ');
    expect(control.valid).toBeFalsy();
  });

  it('name control should contain only alphabets and spaces',() =>{
    let control = component.registrationForm.get('name');
    control.setValue('varun m');
    expect(control.valid).toBeTruthy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('varun@gmail');
    expect(control.valid).toBeFalsy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('varungmail.com');
    expect(control.valid).toBeFalsy();
  });

  it('email control should contain both (@ and .)',() =>{
    let control = component.registrationForm.get('email');
    control.setValue('varun@gmail.com');
    expect(control.valid).toBeTruthy();
  });

  it('ContactNumber control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('contactNumber');
    control.setValue('85269875');
    expect(control.valid).toBeFalsy();
  });

  it('ContactNumber control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('contactNumber');
    control.setValue('4236985478');
    expect(control.valid).toBeFalsy();
  });

  it('ContactNumber control should contain 10 digits and must start with (6 or 7 or 8 or 9)',() =>{
    let control = component.registrationForm.get('contactNumber');
    control.setValue('8310200746');
    expect(control.valid).toBeTruthy();
  });

  it('should make the username control required',() =>{
    let control = component.registrationForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('password control should be minimum of length 6',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });

  it('password control should be minimum of length 6',() =>{
    let control = component.registrationForm.get('password');
    control.setValue('abcdeg');
    expect(control.valid).toBeTruthy();
  });

  it('should make the gender control required',() =>{
    let control = component.registrationForm.get('gender');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the dateOfBirth control required',() =>{
    let control = component.registrationForm.get('dateOfBirth');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the maritalStatus control required',() =>{
    let control = component.registrationForm.get('maritalStatus');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardianType control required',() =>{
    let control = component.registrationForm.get('guardianType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardianName control required',() =>{
    let control = component.registrationForm.get('guardianName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the address control required',() =>{
    let control = component.registrationForm.get('address');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the state control required',() =>{
    let control = component.registrationForm.get('state');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the citizenship control required',() =>{
    let control = component.registrationForm.get('citizenship');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the country control required',() =>{
    let control = component.registrationForm.get('country');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the accountType control required',() =>{
    let control = component.registrationForm.get('accountType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the branchName control required',() =>{
    let control = component.registrationForm.get('branchName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the identificationType control required',() =>{
    let control = component.registrationForm.get('identificationType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the identificationDocumentNumber control required',() =>{
    let control = component.registrationForm.get('identificationType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the identificationType control required',() =>{
    let control = component.registrationForm.get('identificationDocumentNumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  
  it('should make the referenceAccountHolderName control required',() =>{
    let control = component.registrationForm.get('referenceAccountHolderName');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the referenceAccountHolderAccountNumber control required',() =>{
    let control = component.registrationForm.get('referenceAccountHolderAccountNumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('ReferenceAccountHolderAccountNumber control should exactly contain 16 digits',() =>{
    let control = component.registrationForm.get('referenceAccountHolderAccountNumber');
    control.setValue('123456f89009876y');
    expect(control.valid).toBeFalsy();
  });

  it('ReferenceAccountHolderAccountNumber control should exactly contain 16 digits',() =>{
    let control = component.registrationForm.get('referenceAccountHolderAccountNumber');
    control.setValue('12345678');
    expect(control.valid).toBeFalsy();
  });

  it('ReferenceAccountHolderAccountNumber control should exactly contain 16 digits',() =>{
    let control = component.registrationForm.get('referenceAccountHolderAccountNumber');
    control.setValue('1234567891011145');
    expect(control.valid).toBeTruthy();
  });
  
  it('should make the referenceAccountHolderAddress control required',() =>{
    let control = component.registrationForm.get('referenceAccountHolderAddress');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the initialDepositAmount control required',() =>{
    let control = component.registrationForm.get('initialDepositAmount');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the registrationDate control required',() =>{
    let control = component.registrationForm.get('registrationDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


});
