import { Entity, property, model } from '@loopback/repository';

@model()
export class Amount extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  amountId?: number;

  @property({
    type: "number",
  })
  venueId: number;

  @property({
    type: "number",
  })
  x: number;

  @property({
    type: "string",
  })
  y: string;

  @property({
    type: "number",
  })
  amount: number;

  getId() {
    return this.id;
  }

}
