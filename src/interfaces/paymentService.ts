export interface PaymentService {
    processPayment(amount: number): Promise<string>;
}