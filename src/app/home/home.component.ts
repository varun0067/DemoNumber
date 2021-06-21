import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../services/CustomerService/customer.service';
import { account } from '../models/account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  invalidCredentials=false;
  accounts:account[];
  loginForm: FormGroup;
  account;
  
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit() {
      //initializing validators
      this.loginForm  = new FormGroup({
      'username': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
      });

      this.account=this.customerService.getAccount().subscribe()
  }

  //To show and hide password field
  showPassword()
  {
    var id='password';
    var visible= <HTMLInputElement>document.getElementById(id);
    visible.type=="text"?visible.type="password":visible.type="text";
  }

  //onSubmit event login
  login() {

    let account=this.customerService.getUserByUsername(this.loginForm.value.username);
    if ( account==undefined||account.password != this.loginForm.value.password ) {
      this.invalidCredentials = true;
      this.router.navigateByUrl("/");
    }
    else {
      //setting session storage on successful login for a customer
      sessionStorage.setItem("custId",account.customerId);
      this.router.navigateByUrl("/customer-dashboard");
    }
  }
}
