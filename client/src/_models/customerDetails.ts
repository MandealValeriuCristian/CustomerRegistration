export interface CustomerDetails {
    id: number;
    name: string;
    websiteURL: string;
    email: string;
    phone: string;
    postalAddress: Address;
    invoicingAddress: Address;
  }
  
  export interface Address {
    street: string;
    number: string;
    postCode: string;
    city: string;
    country: string;
  }