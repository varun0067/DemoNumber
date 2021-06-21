import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/CustomerService/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.css']
})
export class NavBarLoginComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }

  userDetails;
  custId;

  ngOnInit(): void {
    this.custId=sessionStorage.getItem("custId");
    this.userDetails=this.customerService.getUserById(this.custId);
  }

  //logout
  logout()
  {
    sessionStorage.setItem("custId","");
    this.router.navigateByUrl("/");
  }

}
