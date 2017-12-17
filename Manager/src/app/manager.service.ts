import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class ManagerService {

  // my data mock
  customers: Array<Customer> = [];


  constructor() {
    this.customers = [
      new Customer(1, 'M','Marcin','Opałka','Mazowieckie','Wołomin','jakiś adress', 0 ),
      new Customer(2, 'K','Marlena','Majznel','Mazowieckie','Ząbki','jakiś adress', 0 ),
      new Customer(3, 'M','Adam','Małysz','Mazowieckie','Sochaczew','jakiś adress', 0 ),
      new Customer(4, 'K','Michalina','Kowalska','Mazowieckie','Nadażyn','jakiś adress', 0 ),
      new Customer(5, 'K','Marzena','Krupa','Mazowieckie','Ostrołęka','jakiś adress', 0 ),
      new Customer(6, 'M','Mariusz','Kleszcz','Mazowieckie','Piaseczno','jakiś adress', 0 ),
      new Customer(7, 'M','Piotr','Rabarbar','Mazowieckie','Łomianki','jakiś adress', 0 ),
      new Customer(8, 'K','Maria','Awaria','Mazowieckie','Płock','jakiś adress', 0 ),
      new Customer(9, 'M','Jakub','Gong','Mazowieckie','Wyszogród','jakiś adress', 0 )
    ];
   }

  getCustomers(): Array<Customer> {
    return this.customers;
  }


}
