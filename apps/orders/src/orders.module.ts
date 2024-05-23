import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OdersRepository } from './oders.repository';
import { Order, OrderSchema } from './schemas/oders.schema';

@Module({
  imports: [

  ConfigModule.forRoot({
    isGlobal:true,
    validationSchema:Joi.object(  
     {
       // makes the check for our environment variable
       MONGODB_URI:Joi.string().required(),
      }),
    //check path for the .env
    envFilePath:"./apps/orders/.env"
  }),
    DatabaseModule,
    MongooseModule.forFeature([{name:Order.name, schema:OrderSchema}])
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OdersRepository],
})
export class OrdersModule {}
