export class Order{
  id: number | undefined;
  departureCity: string | undefined;
  arrivedCity: string | undefined;
  createdOrderTime: Date | undefined;
  departureTime: Date | undefined;
  arrivedTime: Date | undefined;
  closedOrderTime: Date | undefined;
  customerId: number | undefined;
  supplierId: number | null | undefined;
  productId: number | null | undefined;
}
