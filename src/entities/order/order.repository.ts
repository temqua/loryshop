import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderRepository {
  constructor(private databaseService: DatabaseService) {}
  async create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  async findAll() {
    return await this.databaseService.order.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.order.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    return await this.databaseService.order.delete({
      where: {
        id,
      },
    });
  }
}
