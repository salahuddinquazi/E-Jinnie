import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegisterationComponent } from './customer-registeration/customer-registeration.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MaidRegistrationComponent } from './maid-registration/maid-registration.component';
import { MaidDetailsComponent } from './maid-details/maid-details.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterationComponent,
    CustomerDetailsComponent,
    MaidRegistrationComponent,
    MaidDetailsComponent,
    OrdersComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
