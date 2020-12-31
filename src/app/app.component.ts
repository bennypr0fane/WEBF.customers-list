import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public customersList = [];
  constructor(private dataService: DataService) {
    this.dataService.getCustomerList().then((result: any[]) => {
      this.customersList = result;
    })
  }



}
