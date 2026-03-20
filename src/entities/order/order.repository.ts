import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';

@Injectable()
export class OrderRepository {
  constructor(private databaseService: DatabaseService) {}
  async create(createOrderDto: CreateOrderDto) {
    return await this.databaseService.client.order.create({
      data: {
        ...createOrderDto,
        status: OrderStatus.CREATED,
        paymentStatus: PaymentStatus.PENDING,
      },
    });
  }

  async findAll() {
    return await this.databaseService.client.order.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.client.order.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.databaseService.client.order.update({
      data: {
        ...updateOrderDto,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return await this.databaseService.client.order.delete({
      where: {
        id,
      },
    });
  }
}
