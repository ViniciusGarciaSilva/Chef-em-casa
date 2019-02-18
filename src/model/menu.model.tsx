export interface Menu {
  id: string;
  title: string;
  description: string;
  img: any;
  details: {
    appetizer: string,
    main: string,
    dessert: string,
  },
  price: string;
}
