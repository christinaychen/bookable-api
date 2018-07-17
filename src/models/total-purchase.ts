import { Entity, property, model } from '@loopback/repository';

@model()
export class totalPurchase extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  purchaseId?: number;

  @property({
    type: 'number',
  })
  customerId: number;

  @property({
    type: 'string',
  })
  stripeToken: string;

  @property({
    type: "string",
  })
  purchaseDate: Date;


  getId() {
    return this.id;
  }




}
