import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

import { DatePipe } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UpdateAccountComponent } from './update-account/update-account.component';


const routes:Routes=[
  { path: '', component:HomeComponent},
  { path: 'registration-page', component: RegistrationPageComponent},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'update-account', component: UpdateAccountComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent,
    RegistrationPageComponent,
    CustomerDashboardComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
