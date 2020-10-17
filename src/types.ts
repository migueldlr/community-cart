type CartType = 'delivery' | 'pickup';

export interface Cart {
  ownerId: string;
  storeId: string;
  type: CartType;
  orderTime: Date;
  deliverTime: Date;
  itemLimit: number;
  numPeople: number;
  maxPeople: number;
}
