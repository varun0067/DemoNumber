import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/CustomerService/customer.service';
import { account } from '../models/account.model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  acc:account;
  ngOnInit(): void {
    this.acc=this.customerService.getUser();
  }


}
