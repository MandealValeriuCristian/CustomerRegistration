import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Customer } from 'src/_models/customer';
import { CustomerDetails } from 'src/_models/customerDetails';
import { environment } from 'src/environments/environment.development';
import { CustomerDetailsComponent } from '../customers/customer-details/customer-details.component';
import { RegisterCustomer } from 'src/_models/registerCustomer';
import { ApiResponseModel } from 'src/_models/apiResponseModel';
import { CreateCustomer } from 'src/_models/createCustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = environment.apiUrl;
  _http = inject(HttpClient);
  customers$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  constructor() { }
  get customers(){
    return this.customers$.value;
  }
  set customers(customers: Customer[]) {
    this.customers$.next(customers);
  }
  getCustomers() {
    return this._http.get<Customer[]>(this.baseUrl + 'customers');
  }
  getCustomer(id: string){
    return this._http.get<CustomerDetails>(this.baseUrl + 'customers/' + id)
  }
  registerCustomer(model: CreateCustomer): Observable<RegisterCustomer> {
    return this._http.post<ApiResponseModel>(this.baseUrl + 'customers', model)
    .pipe(
      map((response: ApiResponseModel) => {
        if(response?.errorMessage) 
          throw new Error(response?.errorMessage);
        return response?.data;
      })
    );
  }
}
