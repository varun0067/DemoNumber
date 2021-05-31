import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  invalid=false;
  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(value) {
    let account=this.customerService.onGetUser(value.username);
    if ( account==undefined||account.password != value.password ) {
      this.router.navigateByUrl("/");
      this.invalid = true;
    }
    else {
      sessionStorage.setItem("custId",account.customerId);
      this.router.navigateByUrl("/customer-dashboard");
    }
  }

}
