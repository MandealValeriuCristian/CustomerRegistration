import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Customer } from 'src/_models/customer';
import { CustomerDetails } from 'src/_models/customerDetails';
import { environment } from 'src/environments/environment.development';
import { CustomerDetailsComponent } from '../customers/customer-details/customer-details.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  _http = inject(HttpClient);
  constructor() { }
  getCustomers() {
    return this._http.get<Customer[]>(this.baseUrl + 'customers');
  }
  getCustomer(id: string){
    return this._http.get<CustomerDetails>(this.baseUrl + 'customers/' + id)
  }
}
