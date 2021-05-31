import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { account } from '../models/account.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts:account[];
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.accounts=this.customerService.onGet();
  }

}
