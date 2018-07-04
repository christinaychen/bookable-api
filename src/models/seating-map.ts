import { model, property, Entity } from "@loopback/repository";

@model({
  name: "SeatingMap"
})
export class SeatingMap extends Entity {

  @property({
    type: "number",
    id: true
  })
  MapId: number;

  @property({
    type: "number"
  })
  VenueId: number;

  @property({
    type: "string"
  })
  VenueType: string;

  @property({
    type: "number"
  })
  Layout: number[][];

}
