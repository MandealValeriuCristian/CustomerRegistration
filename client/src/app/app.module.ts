import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { RegisterCustomerModalComponent } from './modals/register-customer-modal/register-customer-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCardComponent,
    CustomerDetailsComponent,
    NotFoundComponent,
    RegisterCustomerModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
