import { Module } from '@nestjs/common';
import { OrderModule } from './entities/order/order.module';
import { ProductModule } from './entities/product/product.module';

@Module({
  imports: [OrderModule, ProductModule],
})
export class AppModule {}
