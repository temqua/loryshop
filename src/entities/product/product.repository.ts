import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private databaseService: DatabaseService) {}
  async create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.databaseService.product.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.product.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return await this.databaseService.product.delete({
      where: {
        id,
      },
    });
  }
}
