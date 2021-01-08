import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() filteredCustomersList: EventEmitter<any> = new EventEmitter();
  @Input() searchType: 'first_name' | 'last_name' | 'active';
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  public filterFirstName(event) {
    console.log(event);
    if (event.target.value === '') {
      this.data = this.backupList;
    } else {
      this.data = this.backupList;
      this.data = this.data.filter((currentCustomer) => currentCustomer.first_name === event.target.value);
    }
  }
  public filterLastName(event) {
    this.data = this.data.filter((currentCustomer) => currentCustomer.last_name === event.target.value);
  }
  public filterID(event) {
    this.data = this.data.filter((currentCustomer) => currentCustomer.id === event.target.value);
  }
  public filterActive(event) {
    this.data = this.data.filter((currentCustomer) => currentCustomer.active === event.target.value);
  }
}
