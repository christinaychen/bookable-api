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
let OrderItem = class OrderItem extends repository_1.Entity {
    getId() {
        return this.id;
    }
    getRating() {
        return this.ratingValue;
    }
    getVenueId() {
        return this.venueId;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "orderItemId", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "venueId", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "purchaseId", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "customerId", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "x", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "y", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], OrderItem.prototype, "time", void 0);
__decorate([
    repository_1.property({
        type: "number",
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "amount", void 0);
__decorate([
    repository_1.property({
        type: "string",
    }),
    __metadata("design:type", String)
], OrderItem.prototype, "token", void 0);
OrderItem = __decorate([
    repository_1.model()
], OrderItem);
exports.OrderItem = OrderItem;
//# sourceMappingURL=order-item.js.map