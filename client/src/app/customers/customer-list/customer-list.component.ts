import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { RegisterCustomerModalComponent } from 'src/app/modals/register-customer-modal/register-customer-modal.component';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  unsavedChanges = false;
  modalRef: BsModalRef | undefined;
  bsModalRef: BsModalRef<RegisterCustomerModalComponent> = new BsModalRef<RegisterCustomerModalComponent>();
  constructor(private customerService: CustomerService, private modalService: BsModalService) {}
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe({
      next: customers => this.customers = customers
    })
  }
  openRegisterModal() {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Register a new customer'
      }
    }
    this.bsModalRef = this.modalService.show(RegisterCustomerModalComponent, initialState);
    this.bsModalRef.content!.cancelBtnName = 'Cancel';
    this.bsModalRef.content!.registerBtnName = 'Register';
  }

  
}
