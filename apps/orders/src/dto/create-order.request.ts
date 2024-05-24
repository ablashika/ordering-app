import { IsNotEmpty,IsString, IsPositive, IsPhoneNumber, IsNumber } from "class-validator";


export class CreateOrderRequest {
    
   
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsNumber()
    price:number;

    @IsString()
    phoneNumber:string;




}