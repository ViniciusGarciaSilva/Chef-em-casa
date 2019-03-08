export interface Order {
    id: string;
    providerId: string;
    customerId: string;
    customerName: string;
    description: string;
    schedule: string;
    img: any;
    details: {
      appetizer: string,
      main: string,
      dessert: string,
    },
    price: string;
  }
  