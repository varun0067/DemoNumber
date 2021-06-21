import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { account } from 'src/app/models/account.model';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user details based on username',()=>{
    const user=service.getUserByUsername("varun12");
    expect(user).toBeDefined();
  })

  it('should return undefined details based on wrong username',()=>{
    const user=service.getUserByUsername("wrongUser");
    expect(user).toBeUndefined();
  })

  it('should return user details based on customerId',()=>{
    const user=service.getUserById("R-111");
    expect(user).toBeDefined();
  })

  it('should not return user details based on customerId',()=>{
    const user=service.getUserById("r-123");
    expect(user).toBeUndefined();
  })

  it('should add a account detsils on register',()=>{
    const count=service.accounts.length;
    const acc=new account(
      "R-111",
       "1234567891011121",
        "varun",
        "varun12",
        "cristiano",
        "father",
        "Manoj",
        "77/79 khb colony mysore",
        "indian",
        "Karnataka",
        "india",
        "Varunganesh006@gamil.com",
        "male",
        "unmarried",
        "8310200746",
        new Date("1955-11-06"),
        new Date("2021-05-30"),
        "saving",
        "mysore",
        "adult",
        "5000",
        "PAN",
        "BNYTF123DF12",
        "Manoj",
        "7896523145287953",
        "77/79 khb colony mysore"
    )
    service.addUser(acc);
    
    expect(service.accounts.length).toBe(count+1);
  })

  it('should return all username that has registered',()=>{
    const usernames=["varun12"];
    
    expect(service.getAllUsernames()).toEqual(usernames);
  })

  it('should return currently logged in user details',()=>{
    sessionStorage.setItem("custId","R-111");
    const user=service.getUserById("R-111");

    expect(service.getUser()).toBe(user);
  })

  it('should update password on forgot password',()=>{
    const newPassword="123456";
    service.updatePassword(newPassword,"varun12");

    expect(service.getUserByUsername("varun12").password).toBe(newPassword);
  })

  it('should change password on user change password',()=>{
    const newPassword="123456";
    sessionStorage.setItem("custId","R-111");
    service.changePassword(newPassword);

    expect(service.getUserById("R-111").password).toBe(newPassword);
  })

});
