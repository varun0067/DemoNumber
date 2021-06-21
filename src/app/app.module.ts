import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationPageComponent } from 'src/app/home/registration-page/registration-page.component';

import { DatePipe } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UpdateAccountComponent } from 'src/app/customer-dashboard/update-account/update-account.component';
import { ApplyLoanComponent } from 'src/app/customer-dashboard/apply-loan/apply-loan.component';
import { NavBarComponent } from 'src/app/home/nav-bar/nav-bar.component';
import { NavBarLoginComponent } from 'src/app/customer-dashboard/nav-bar-login/nav-bar-login.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { LoanDetailsComponent } from 'src/app/customer-dashboard/loan-details/loan-details.component';
import { ChangePasswordComponent } from 'src/app/customer-dashboard/change-password/change-password.component';


const routes:Routes=[
  { path: '', component:HomeComponent},
  { path: 'registration-page', component: RegistrationPageComponent,},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'update-account', component: UpdateAccountComponent},
  { path: 'apply-loan', component: ApplyLoanComponent},
  { path: 'nav-bar', component: NavBarComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'loan-details', component: LoanDetailsComponent},
  { path: 'change-password', component: ChangePasswordComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationPageComponent,
    CustomerDashboardComponent,
    UpdateAccountComponent,
    ApplyLoanComponent,
    NavBarComponent,
    NavBarLoginComponent,
    ForgotPasswordComponent,
    LoanDetailsComponent,
    ChangePasswordComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
