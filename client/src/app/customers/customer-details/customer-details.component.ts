import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerDetails } from 'src/_models/customerDetails';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: CustomerDetails | undefined;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {   
  }
  ngOnInit(): void {
    this.loadCustomer();
  }
  loadCustomer() {
    const customerId = this.route.snapshot.paramMap.get("customerId");
    if (!customerId) return;
    
    this.customerService.getCustomer(customerId).subscribe({
      next: customer => {
        this.customer = customer
      }
    })
  }
}
