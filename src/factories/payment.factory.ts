import {PaymentService} from "../interfaces/paymentService";
import {StripeService} from "../libs/stripe/stripe.service";
import {BraintreeService} from "../libs/braintree/braintree.service";
import {PaypalService} from "../libs/paypal/paypal.service";

export class PaymentServiceFactory {
    static getPaymentService(method: string): PaymentService {
        switch (method) {
            case 'stripe':
                return new StripeService();
            case 'braintree':
                return new BraintreeService();
            case 'paypal':
                return new PaypalService();
            default:
                throw new Error('Invalid payment method');
        }
    }
}