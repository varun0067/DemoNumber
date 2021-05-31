import { Injectable } from '@angular/core';
import { account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  accounts:account[]=[{
         customerId:"R111",
         accountNumber: "1234567891011121",
         name: "varun",
         username: "varun12",
         password: "cristiano",
         guardianType: "Father",
         guardianName: "Manoj",
         address: "77/79 khb colony mysore",
         citizenship: "Indian",
         state: "Karnataka",
         country: "India",
         email: "Varunganesh006@gamil.com",
         gender: "Male",
         maritalStatus: "Unmaried",
         contactNumber: "8310200746",
         dateOfBirth: new Date("1998-11-06"),
         registrationDate: new Date("2021-05-30"),
         accountType: "Saving",
         branchName: "Mysore",
         citizenStatus: "adult",
         initialDepositAmount: "5000",
         identificationType: "PAN",
         identificationDocumentNumber: "BNYTF123DF12",
         referenceAccountHolderName: "Manoj",
         referenceAccountHolderAccountNumber: "7896523145287953",
         referenceAccountHolderAddress: "77/79 khb colony mysore"
  }

  ];

  constructor() { }

  onGet(){
    return this.accounts;
  }

  onCreate(accounts:account){
    this.accounts.push(accounts);
  }

  onGetUser(username:string){
    let acc=this.accounts.find(x=>x.username===username);
    return acc;
  }

  onGetUserById(customerId:string){
    let acc=this.accounts.find(x=>x.customerId===customerId);
    return acc;
  }

}
