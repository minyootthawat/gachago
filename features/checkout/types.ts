export type CheckoutRequest = {
  productId: string;
  quantity: number;
};

export type CheckoutSession = {
  orderId: string;
  userPackId: string;
  paymentReference: string;
  qrCodeUrl?: string;
  status: "pending";
};
