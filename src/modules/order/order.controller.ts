import {OrderService} from "./order.service";
import {Body} from "@nestjs/common";

export class OrderController {
    constructor(protected readonly service: OrderService) {}

    public async proceedPayment(
        @Body() body: { amount: number, paymentMethod: string }
    ) {
        return this.service.processOrder(body.amount, body.paymentMethod)
    }
}