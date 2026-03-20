import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private repository: OrderRepository) {}
  async create(createOrderDto: CreateOrderDto) {
    return await this.repository.create(createOrderDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.repository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
