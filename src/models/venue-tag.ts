import { Entity, property, model } from '@loopback/repository';

@model()
export class VenueTag extends Entity {
  @property({
    type: 'string',
  })
  tagType: string;

  @property({
    type: "number",
  })
  venueId: number;



  getVenueId() {
    return this.venueId;
  }




}
