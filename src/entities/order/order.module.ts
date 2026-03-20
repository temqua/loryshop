import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { DatabaseModule } from '../../database.module';

@Module({
  controllers: [OrderController],
  imports: [DatabaseModule],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
