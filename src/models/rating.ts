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
    type: "number",
  })
  ratingValue: number;


  getId() {
    return this.id;
  }

  getRating() {
    return this.ratingValue;
  }

  getVenueId() {
    return this.venueId;
  }




}
