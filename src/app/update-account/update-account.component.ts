import { Component, OnInit } from '@angular/core';
import { account } from '../models/account.model';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  acc:account;

  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());

  today = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior = this.datepipe.transform(this.senior1, 'yyyy-MM-dd');
  
  constructor(private customerSerrvice:CustomerService,private router:Router,public datepipe:DatePipe) { }
  
  customerId=sessionStorage.getItem("custId");
  
  ngOnInit(): void {

    this.acc=this.customerSerrvice.onGetUserById(this.customerId);
  
  }

  onSubmit(value) {

    this.router.navigateByUrl("/");

  }
}
