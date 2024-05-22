import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from '@app/common';

@Module({
  imports: [

  ConfigModule.forRoot({
    isGlobal:true,
    validationSchema:Joi.object(  
     {
       // makes the check for our environment variable
        MONGDODB_UR:Joi.string().required(),
      }),
    //check path for the .env
    envFilePath:"./apps/orders/.env"
  }),
    DatabaseModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
