import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  telegramId: number;

  @IsNumber()
  totalAmount: number;

  @IsString()
  phone: string;

  @IsString()
  name: string;

  @IsString()
  email: string;
}
