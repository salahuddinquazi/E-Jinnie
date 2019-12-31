import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaidDetailsComponent } from "./maid-details/maid-details.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { LoginComponent } from "./login/login.component";
import {  CustomerRegisterationComponent} from "./customer-registeration/customer-registeration.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'maid', component: MaidDetailsComponent },
  { path: 'customer', component: CustomerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customerRegister', component: CustomerRegisterationComponent},
  { path: '', component: LoginComponent ,pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
