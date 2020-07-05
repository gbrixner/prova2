import { IsDate, IsString, IsNumber, MaxLength, MinLength} from 'class-validator';
import { OrderItem } from '../orderItem/orderItem.entity';

export class OrderDto {

    @IsDate({ message: 'O valor da orderDate nao eh uma data valida!' })
    orderDate: Date;

    @IsString({ message: 'O valor de shippingCompany nao eh uma string valida!' })
    @MinLength(5, { message: 'O valor de shippingCompany deve possuir mais que 5 caracteres.' })
    @MaxLength(60, { message: 'O valor de shippingCompany deve possuir no maximo 60 caracteres.' })
    shippingCompany: string;

    @IsString({ message: 'O valor de shippingAddress nao eh uma string valida!' })
    @MinLength(5, { message: 'O valor de shippingAddress deve possuir mais que 5 caracteres.' })
    @MaxLength(80, { message: 'O valor de shippingAddress deve possuir no maximo 80 caracteres.' })
    shippingAddress: string;

    @IsNumber()
    amount: number;

    @IsNumber()
    valueProducts: number;

    orderItems: OrderItem;
}