import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { patch } from 'webdriver-js-extender';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {path: 'customers', component: CustomersComponent, children: [
    { path: '', redirectTo: '/customers/card-view', pathMatch: 'full' },
    {path: 'card-view', component: CardViewComponent},
    {path: 'list-view', component: ListViewComponent},
    {path: 'map-view', component: MapViewComponent},
    {path: 'new-customer', component: NewCustomerComponent}
  ]},
  {path: 'orders', component: OrdersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
