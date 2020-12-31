import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCustomerList(): Promise<any> {
    return this.http.get('assets/MOCK_DATA.json').toPromise();
  }
}
