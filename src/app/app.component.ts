import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public customersList = [];
  public isNewCustomer = false;

  constructor(private dataService: DataService) {
    this.dataService.getCustomerList().then((result: any[]) => {
      this.customersList = result;
      this.backupList = result;
    });
  }

  public addCustomerParent(event) {
    const lastCustomer = this.customersList[this.customersList.length - 1];
    console.log(lastCustomer);
    event.id = lastCustomer.id + 1;
    this.customersList.push(event);
    this.toggleNewCustomer();
  }

  public toggleNewCustomer() {
    this.isNewCustomer = !this.isNewCustomer;
  }

  public deleteCustomer(customer) {
    this.customersList = this.customersList.filter((currentCustomer) => currentCustomer.id !== customer.id);
  }


}
