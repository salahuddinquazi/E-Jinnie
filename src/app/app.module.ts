import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule  } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegisterationComponent } from './customer-registeration/customer-registeration.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { MaidRegistrationComponent } from './maid-registration/maid-registration.component';
import { MaidDetailsComponent } from './maid-details/maid-details.component';
import { OrdersComponent } from './orders/orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginProvider, AuthService, AuthServiceConfig, SocialLoginModule } from "angularx-social-login";
import { HttpClientModule } from "@angular/common/http";
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';

export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('app-id')
      }
    ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    CustomerRegisterationComponent,
    CustomerDetailsComponent,
    MaidRegistrationComponent,
    MaidDetailsComponent,
    OrdersComponent,
    DashboardComponent,
    AdminComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    DialogModule,
    TableModule
  ],
  providers: [
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
