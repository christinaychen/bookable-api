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
  /*
    @property({
      type: "datetime",
    })
    purchaseDate: Date; */

  @property({
    type: "number",
  })
  age: number;

  @property({
    type: "string",
    required: true,
  })
  email: string;

  @property({
    type: "string",
    required: true,
  })
  password: string;

  getId() {
    return this.id;
  }




}
