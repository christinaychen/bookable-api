import { Entity, property, model } from '@loopback/repository';

@model()
export class Rating extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  ratingId?: number;

  @property({
    type: "number",
  })
  customerId: number;

  @property({
    type: "number",
  })
  venueId: number;

  @property({
    type: "string",
  })
  ratingValue: number;


  getId() {
    return this.id;
  }




}
