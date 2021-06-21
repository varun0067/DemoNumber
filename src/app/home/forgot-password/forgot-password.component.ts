import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }
  
  invalidPassword=false;
  user;
  //binding variable for password
  pass="";

  forgotPasswordForm:FormGroup;
  ngOnInit(): void {
    //initializing validators
    this. forgotPasswordForm = new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'dateOfBirth': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'confirmPassword': new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  }

  buttonValid=false;

  //checking password and confirm password
  checkPassword(value)
  {
    value!=this.pass?this.invalidPassword=true:this.invalidPassword=false;
    this.buttonValid=this.invalidPassword||this.invalidUser;
  }

  //checking username available
  invalidUser=false;
  users;
  checkUsername(value){
    this.users=this.customerService.getAllUsernames();
    this.users.some(u=>u===value)?this.invalidUser=false:this.invalidUser=true;
    this.buttonValid=this.invalidPassword||this.invalidUser;
  }


  invaliDateOfBirth=false;
  changePasswordSuccess=false;

  //Forgot Password
  forgotPassword()
  {
    this.user=this.customerService.getUserByUsername(this.forgotPasswordForm.value.username);

    if(this.user==undefined)
    {
      this.invalidUser=true;
      this.router.navigateByUrl("/forgot-password");
    }
    this.user.dateOfBirth!=this.forgotPasswordForm.value.dateOfBirth?this.invaliDateOfBirth=true:this.invaliDateOfBirth=false;

    if(!this.invaliDateOfBirth)
    {
      this.customerService.updatePassword(this.forgotPasswordForm.value.password,this.forgotPasswordForm.value.username);
      this.changePasswordSuccess=true;

      var FormID = 'forgotPasswordForm';
      var resetForm = <HTMLFormElement>document.getElementById(FormID);
      resetForm.reset();

      this.router.navigateByUrl("forgot-password");
    }
    else{
      this.router.navigateByUrl("/forgot-password");
    }
  }
}
