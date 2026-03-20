import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  status: OrderStatus;

  paymentStatus: PaymentStatus;

  cancelReason: string;
}
