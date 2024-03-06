import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/_models/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer | undefined;
  router = inject(Router);
  constructor() { }

  ngOnInit(): void {
  }
  navigateToCustomerDetails(customerId: number){
    this.router.navigate([
      'customers',
      customerId
    ]);
  }
}
