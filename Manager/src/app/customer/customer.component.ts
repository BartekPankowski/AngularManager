import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Array<Customer> = [];

  constructor(private ManagerService: ManagerService) { }

  ngOnInit() {
    this.customers = this.ManagerService.getCustomers();
  }

}
