import { Entity, property, model } from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    columnName: "customer_id",

  })
  customerId?: number;

  @property({
    type: "string",
  })
  name: string;

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
