import { Injectable,Logger } from "@nestjs/common";
import { Order } from "./schemas/oders.schema";
import { AbstractRepository } from "@app/common";
import { InjectModel , InjectConnection,} from "@nestjs/mongoose"
import { Connection, Model } from "mongoose";
import { OrdersModule } from "./orders.module";




@Injectable()
export class OdersRepository extends AbstractRepository <Order>{

    protected readonly logger = new Logger(OdersRepository.name)
   constructor(
    @InjectModel(Order.name) oderModel:Model <Order>, @InjectConnection() connection:Connection 
 ){
    super(oderModel, connection)
 }

   

}
