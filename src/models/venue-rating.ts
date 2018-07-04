import { Entity, property, model } from '@loopback/repository';

@model()
export class VenueRating extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  venueRatingId?: number;

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
