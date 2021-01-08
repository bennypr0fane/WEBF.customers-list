import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-add',
  templateUrl: './edit-add.component.html',
  styleUrls: ['./edit-add.component.scss']
})
export class EditAddComponent implements OnInit {
  public data = {first_name: '', last_name: '', birth_date: '', active: false};

 //@Input()

  @Output() dataHasChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public addCustomerChild(bananaEvent) {
    console.log(bananaEvent);
    console.log(this.data);
    this.dataHasChanged.emit(this.data);
    this.reset();
  }
  private reset() {
    this.data = {first_name: '', last_name: '', birth_date: '', active: false};
  }



}
