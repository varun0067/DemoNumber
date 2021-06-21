import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordComponent } from './change-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ ChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 3 controls',() =>{
    expect(component.changePasswordForm.contains('confirmPassword')).toBeTruthy();
    expect(component.changePasswordForm.contains('newPassword')).toBeTruthy();
    expect(component.changePasswordForm.contains('confirmPassword')).toBeTruthy();
  });

  it('should make the confirmPassword control required',() =>{
    let control = component.changePasswordForm.get('confirmPassword');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  

  it('should make the newPassword control required',() =>{
    let control = component.changePasswordForm.get('newPassword');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the confirmPassword control required',() =>{
    let control = component.changePasswordForm.get('confirmPassword');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  
  it('should redirect to customer dashboard on successful login',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.changePasswordForm.controls.confirmPassword.setValue("varun12");
    component.changePasswordForm.controls.newPassword.setValue("cristiano");
    component.changePasswordForm.controls.confirmPassword.setValue("cristiano");

    component.changePassword();

    expect(spy).toHaveBeenCalledWith('/change-password');
  });
});
