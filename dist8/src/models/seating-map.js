"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let SeatingMap = class SeatingMap extends repository_1.Entity {
<<<<<<< HEAD
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
    checkReserved(Row, Column) {
        console.log("we out here");
        if (this.Layout[Row][Column] == -1) {
            console.log("das true");
            return true;
        }
        else {
            console.log("das false");
            return false;
        }
    }
=======
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
};
__decorate([
    repository_1.property({
        type: "number",
        id: true
    }),
    __metadata("design:type", Number)
], SeatingMap.prototype, "MapId", void 0);
__decorate([
    repository_1.property({
        type: "number"
    }),
    __metadata("design:type", Number)
], SeatingMap.prototype, "VenueId", void 0);
__decorate([
    repository_1.property({
        type: "string"
    }),
    __metadata("design:type", String)
], SeatingMap.prototype, "VenueType", void 0);
__decorate([
    repository_1.property({
        type: "number"
    }),
<<<<<<< HEAD
    __metadata("design:type", Number)
], SeatingMap.prototype, "Rows", void 0);
__decorate([
    repository_1.property({
        type: "number"
    }),
    __metadata("design:type", Number)
], SeatingMap.prototype, "Columns", void 0);
=======
    __metadata("design:type", Array)
], SeatingMap.prototype, "Layout", void 0);
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
SeatingMap = __decorate([
    repository_1.model({
        name: "SeatingMap"
    })
], SeatingMap);
exports.SeatingMap = SeatingMap;
//# sourceMappingURL=seating-map.js.map