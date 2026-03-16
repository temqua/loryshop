import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  private logger = new Logger('DatabaseModule');

  public async onModuleDestroy() {
    await this.$disconnect();

    this.logger.log('Disconnected from database');
  }

  public async onModuleInit() {
    this.logger.log('Connecting to database...');

    await this.$connect();

    this.logger.log('Successfully connected to database');
  }
}
