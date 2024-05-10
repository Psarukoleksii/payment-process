import {PaymentService} from "../../interfaces/paymentService";

export class BraintreeService implements PaymentService {
    async processPayment(amount: number): Promise<string> {
        return 'Payment processed with Braintree';
    }
}