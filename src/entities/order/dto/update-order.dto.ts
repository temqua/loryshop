import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';
import { IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsString()
  status: OrderStatus;

  @IsString()
  paymentStatus: PaymentStatus;

  @IsString()
  cancelReason: string;
}
