import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/_models/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
