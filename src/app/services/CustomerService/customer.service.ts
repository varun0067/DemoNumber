import { Injectable } from '@angular/core';
import { account } from '../../models/account.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private http:HttpClient){

  }

  accounts:account[]=[{
         customerId:"R-111",
         accountNumber: "1234567891011121",
         name: "varun",
         username: "varun12",
         password: "cristiano",
         guardianType: "father",
         guardianName: "Manoj",
         address: "77/79 khb colony mysore",
         citizenship: "indian",
         state: "Karnataka",
         country: "india",
         email: "Varunganesh006@gamil.com",
         gender: "male",
         maritalStatus: "unmarried",
         contactNumber: "8310200746",
         dateOfBirth: new Date("1955-11-06"),
         registrationDate: new Date("2021-05-30"),
         accountType: "saving",
         branchName: "mysore",
         citizenStatus: "adult",
         initialDepositAmount: "5000",
         identificationType: "PAN",
         identificationDocumentNumber: "BNYTF123DF12",
         referenceAccountHolderName: "Manoj",
         referenceAccountHolderAccountNumber: "7896523145287953",
         referenceAccountHolderAddress: "77/79 khb colony mysore"
  }

  ];
    custId;
    Usernames:string[];


  getAccount()
  {
    return this.http.get('http://localhost:4465/api/loan');
  }
  //register user
  addUser(accounts:account){
    this.accounts.push(accounts);
  }

  //get user details by username
  getUserByUsername(username:string){
    let acc=this.accounts.find(x=>x.username===username);
    return acc;
  }

  //get user by customer id
  getUserById(customerId:string){
    let acc=this.accounts.find(x=>x.customerId===customerId);
    return acc;
  }

  //get all usernames
  getAllUsernames()
  {
      return this.Usernames=this.accounts.map(u=>u.username);
  }

  //get User details of current login
  getUser()
  {
    this.custId=sessionStorage.getItem("custId");
    return this.accounts.find(u=>u.customerId==this.custId);
  }

  //update user details
  updateUser(value)
  {
    this.custId=sessionStorage.getItem("custId");
    let acc=this.accounts.find(x=>x.customerId==this.custId);
    acc.name=value.name;
    acc.email=value.email;
    acc.contactNumber=value.contactNumber;
    acc.username=value.username;
    acc.gender=value.gender;
    acc.dateOfBirth=value.dateOfBirth;
    acc.citizenStatus=value.citizenStatus;
    acc.maritalStatus=value.maritalStatus;
    acc.guardianName=value.guardianName;
    acc.guardianType=value.guardianType;
    acc.address=value.address;
    acc.citizenship=value.citizenship;
    acc.country=value.country;
    acc.state=value.state;
    acc.accountType=value.accountType;
    acc.branchName=value.branchName;
    acc.identificationDocumentNumber=value.identificationDocumentNumber;
    acc.referenceAccountHolderName=value.referenceAccountHolderName;
    acc.referenceAccountHolderAccountNumber=value.referenceAccountHolderAccountNumber;
    acc.referenceAccountHolderAddress=value.referenceAccountHolderAddress;
  }
  
  //update password when forgot
  updatePassword(password,username)
  {
    let acc=this.accounts.find(x=>x.username==username);
    acc.password=password;
  }

  //change current password
  changePassword(passwd){
    this.custId=sessionStorage.getItem("custId");
    let acc=this.accounts.find(x=>x.customerId==this.custId);
    acc.password=passwd;
  }
}
