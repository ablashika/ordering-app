 
import {Prop, SchemaFactory, Schema} from "@nestjs/mongoose"
import { AbstractDocument } from "@app/common";

@Schema({versionKey:false})
export class Order extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  price: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order);