type CartType = 'delivery' | 'pickup';

export interface Cart {
  _id: string;
  ownerId: string;
  storeId: string;
  type: CartType;
  orderTime: Date;
  deliverTime: Date;
  itemLimit: number;
  numPeople: number;
  maxPeople: number;
}
