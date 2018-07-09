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
  Layout: Array<Array<number>>;

  @property({
    type: "number"
  })
  Rows: number;

  @property({
    type: "number"
  })
  Columns: number;

  fill() {
    this.Layout = [];
    for (let i = 0; i < this.Rows; i++) {
      this.Layout[i] = [];
      for (let j = 0; j < this.Columns; j++) {
        this.Layout[i][j] = 10;
      }
    }
  }
  printArray() {
    for (let i = 0; i < this.Rows; i++) {
      for (let j = 0; j < this.Columns; j++) {
        console.log(this.Layout[i][j] + " ");
      }
    }
    console.log("new line");
  }
  checkReserved(Row: number, Column: number): boolean {
    if (this.Layout[Row][Column] == -1) {
      return true;
    }
    else {
      return false;
    }
  }

}
