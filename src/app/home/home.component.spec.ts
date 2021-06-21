import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls',() =>{
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the username control required',() =>{
    let control = component.loginForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  

  it('should make the password control required',() =>{
    let control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  
  it('should redirect to customer dashboard on successful login',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.loginForm.controls.username.setValue("varun12");
    component.loginForm.controls.password.setValue("cristiano");
    component.login();

    expect(spy).toHaveBeenCalledWith('/customer-dashboard');
  });

  it('should not redirect to customer dashboard on wrong credentials',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.loginForm.controls.username.setValue("varun");
    component.loginForm.controls.password.setValue("abc");
    component.login();
    
    expect(spy).not.toHaveBeenCalledWith('/customer-dashboard');
  });
  
});
