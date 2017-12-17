import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { AppRoutingModule } from './/app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerService } from './manager.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomersComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    CardViewComponent,
    ListViewComponent,
    MapViewComponent,
    NewCustomerComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
