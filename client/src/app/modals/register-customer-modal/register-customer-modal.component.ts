import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApiResponseModel } from 'src/_models/apiResponseModel';
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
  // @ViewChild('registerForm') registerForm: NgForm | undefined;
  // @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
  //   if (this.registerForm?.dirty) {
  //     $event.returnValue = true;
  //   }
  // }
  unsavedChanges=false;
  title = '';
  list: any;
  registerCustomerForm: FormGroup;
  cancelBtnName = '';
  registerBtnName = '';
  showInvoicingAddress = false;
  registeredCustomer: RegisterCustomer | null = null;
  nameControl = new FormControl(null, [Validators.required]);
  websiteURL = new FormControl(null, [Validators.required]);
  email = new FormControl(null, [Validators.required]);
  phone =new FormControl(null, [Validators.required]);
  getRegisterCustomer(): FormGroup<any> {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      websiteURL: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      // street: new FormControl(null, [Validators.required]),
      // websiteURL: new FormControl(null, [Validators.required]),
      // websiteURL: new FormControl(null, [Validators.required]),

    })
  }
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
    this.registerCustomerForm= this.getRegisterCustomer();
  }
  onFormChanged(): void {
    // Update unsavedChanges flag whenever there are changes in the form
    this.unsavedChanges = true;
  }
  onModalHidden(): void {
    // Reset unsavedChanges flag when the modal is closed
    this.unsavedChanges = false;
  }
  preventClose(event: Event): void {
    // If there are unsaved changes, prevent the modal from closing
    if (this.unsavedChanges) {
      event.preventDefault();
    }
  }
  toggleInvoicingAddress(): void {
    this.showInvoicingAddress = !this.showInvoicingAddress;
  }
  submitRegisterForm(): void {
    const value = this.registerCustomerForm.getRawValue();
    const register = new RegisterCustomer(value);
    this.customerService.registerCustomer(register).subscribe({
      next: (response: Customer) => {
        // this.customer = response
        console.log(response)
      }
    })
  }
}