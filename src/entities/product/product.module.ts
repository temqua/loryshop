import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { DatabaseModule } from '../../database.module';

@Module({
  controllers: [ProductController],
  imports: [DatabaseModule],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
