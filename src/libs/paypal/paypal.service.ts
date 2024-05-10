import {PaymentService} from "../../interfaces/paymentService";

export class PaypalService implements PaymentService {
    async processPayment(amount: number): Promise<string> {
        return 'Payment processed with PayPal';
    }
}