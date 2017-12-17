import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ManagerService } from '../manager.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  customers: Array<Customer> = [];
  

  constructor(private ManagerService: ManagerService) {

   }

  ngOnInit() {
    this.customers = this.ManagerService.getCustomers();
  }

}
