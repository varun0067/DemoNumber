import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }

  changePasswordForm:FormGroup;
  ngOnInit(): void {
    //initializing validators
    this.changePasswordForm  = new FormGroup({
      'oldPassword': new FormControl('',[Validators.required]),
      'newPassword': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'confirmPassword': new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  }

  newPass="";
  invalidPassword=false;
  user;
  checkNewPassword(value){
    value!=this.newPass?this.invalidPassword=true:this.invalidPassword=false;
  }


  oldPasswordInvalid=false;
  passwordChanged=false;
  //onSubmit changePassword
  changePassword(){
    this.user=this.customerService.getUser();

    if(this.changePasswordForm.value.oldPassword!=this.user?.password)
    {
      this.oldPasswordInvalid=true;
      this.router.navigateByUrl("/change-password");
    }
    else{
      this.oldPasswordInvalid=false;
      this.customerService.changePassword(this.changePasswordForm.value.confirmPassword);
      this.passwordChanged=true;

      var FormID = 'changePasswordForm';
      var resetForm = <HTMLFormElement>document.getElementById(FormID);
      resetForm.reset();

      this.router.navigateByUrl("/change-password");
    }
  }
}
