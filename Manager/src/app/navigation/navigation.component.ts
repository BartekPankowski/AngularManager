import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  customers = true;
  orders = false
  about = false;
  login = false;

  ngOnInit() {
  }

  changeClass(event):void {
    if(event.target.id === 'customers'){
      this.customers = true;
      this.orders = false
      this.about = false;
      this.login = false;
    }else if(event.target.id === 'orders'){
      this.customers = false;
      this.orders = true;
      this.about = false;
      this.login = false;
    }else if(event.target.id === 'about'){
      this.customers = false;
      this.orders = false;
      this.about = true;
      this.login = false;
    }else{
      this.customers = false;
      this.orders = false;
      this.about = false;
      this.login = true;
    }
  }

}
