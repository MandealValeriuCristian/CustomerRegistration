export class RegisterCustomer {
    name: string;
    websiteURL: string;
    email: string;
    phone: string;
    postalAddress: Address;
    invoicingAddress: Address;
    constructor(obj?: any){
        this.name = obj?.name || null;
        this.websiteURL = obj?.websiteURL || null;
        this.email = obj?.email || null;
        this.phone = obj?.phone || null;
        this.postalAddress = obj?.postalAddress || null;
        this.invoicingAddress = obj?.invoicingAddress || null;
    }
  }
  
  export class Address {
    street: string;
    number: string;
    postCode: string;
    city: string;
    country: string;
    constructor(obj?: any){
        this.street = obj?.street || null;
        this.number = obj?.number || null;
        this.postCode = obj?.postCode || null;
        this.city = obj?.city || null;
        this.country = obj?.country || null;
    }
  }
  