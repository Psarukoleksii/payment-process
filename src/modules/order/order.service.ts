import {Injectable} from "@nestjs/common";
import {PaymentServiceFactory} from "../../factories/payment.factory";

@Injectable()
export class OrderService {
    async processOrder(amount: number, paymentMethod: string): Promise<string> {
        const paymentService = PaymentServiceFactory.getPaymentService(paymentMethod);
        return paymentService.processPayment(amount);
    }
}