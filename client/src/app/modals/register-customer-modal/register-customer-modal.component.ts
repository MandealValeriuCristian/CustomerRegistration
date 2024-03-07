import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { take } from 'rxjs';
import { ApiResponseModel } from 'src/_models/apiResponseModel';
import { Address, CreateCustomer } from 'src/_models/createCustomer';
import { Customer } from 'src/_models/customer';
import { CustomerDetails } from 'src/_models/customerDetails';
import { RegisterCustomer } from 'src/_models/registerCustomer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-register-customer-modal',
  templateUrl: './register-customer-modal.component.html',
  styleUrls: ['./register-customer-modal.component.css']
})
export class RegisterCustomerModalComponent implements OnInit{

  submitted = false;
  title = '';
  registerCustomerForm: FormGroup;
  invoicingForm: FormGroup;
  cancelBtnName = '';
  registerBtnName = '';
  showInvoicingAddress = false;
  registeredCustomer: RegisterCustomer | null = null;

  customer: CustomerDetails = {
    id: 0,
    name: '',
    websiteURL: '',
    email: '',
    phone: '',
    postalAddress: {
      street: '',
      number: '',
      postCode: '',
      city: '',
      country: ''
    },
    invoicingAddress: {
      street: '',
      number: '',
      postCode: '',
      city: '',
      country: ''
    }
  };

  constructor(public bsModalRef: BsModalRef, private customerService: CustomerService) {
    
  }
  
  ngOnInit(): void {
    this._setRegisterCustomer();
  }

  toggleInvoicingAddress(): void {
    this.showInvoicingAddress = !this.showInvoicingAddress;
  }
  private _setRegisterCustomer(): void {
  this.registerCustomerForm = new FormGroup({
      name: new FormControl(null, [Validators.maxLength(200), Validators.required]),
      websiteURL: new FormControl(null, [Validators.maxLength(100), Validators.required, Validators.pattern(/^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/)]),
      email: new FormControl(null, [Validators.maxLength(100),Validators.required,Validators.email]),
      phone: new FormControl(null, [Validators.maxLength(15),Validators.required,Validators.pattern(/^\d{10}$/)]),
      postalAddress: new FormGroup({
        street: new FormControl(null, [Validators.maxLength(100),Validators.required]),
        number: new FormControl(null, [Validators.maxLength(10), Validators.required]),
        postCode: new FormControl(null, [Validators.maxLength(100),Validators.required, Validators.pattern(/^\d{5}$/)] ),
        city: new FormControl(null, [Validators.maxLength(100),Validators.required]),
        country: new FormControl(null, [Validators.maxLength(100), Validators.required])
      }), 
      invoicingAddress: new FormGroup({
        street: new FormControl(null, [Validators.maxLength(100)]),
        number: new FormControl(null, [Validators.maxLength(10)]),
        postCode: new FormControl(null, [Validators.maxLength(100)]),
        city: new FormControl(null, [Validators.maxLength(100)]),
        country: new FormControl(null, [Validators.maxLength(100)])
      }),
    })
    }

  get name() {
    return this.registerCustomerForm.get('name');
  }

  get websiteURL() {
    return this.registerCustomerForm.get('websiteURL');
  }

  get email() {
    return this.registerCustomerForm.get('email');
  }

  get phone() {
    return this.registerCustomerForm.get('phone');
  }

  get postalAddressStreet() {
    return this.registerCustomerForm.get('postalAddress.street');
  }

  get postalAddressNumber() {
    return this.registerCustomerForm.get('postalAddress.number');
  }

  get postalAddressPostCode() {
    return this.registerCustomerForm.get('postalAddress.postCode');
  }

  get postalAddressCity() {
    return this.registerCustomerForm.get('postalAddress.city');
  }

  get postalAddressCountry() {
    return this.registerCustomerForm.get('postalAddress.country');
  }

  get invoicingAddressStreet() {
    return this.registerCustomerForm.get('invoicingAddress.street');
  }

  get invoicingAddressNumber() {
    return this.registerCustomerForm.get('invoicingAddress.number');
  }

  get invoicingAddressPostCode() {
    return this.registerCustomerForm.get('invoicingAddress.postCode');
  }

  get invoicingAddressCity() {
    return this.registerCustomerForm.get('invoicingAddress.city');
  }

  get invoicingAddressCountry() {
    return this.registerCustomerForm.get('invoicingAddress.country');
  }


  get invoicingAddressGroup(): FormGroup {
    return this.registerCustomerForm.get('invoicingAddress') as FormGroup;
  }
  submitRegisterForm(): void {
    const customerValues = this.registerCustomerForm.value
    this.customerService.registerCustomer(customerValues).pipe(take(1)).subscribe({
      next: (response: CreateCustomer) => {
        // console.log(response)
      }
    })
  }
}