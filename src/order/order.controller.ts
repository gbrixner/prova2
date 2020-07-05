import { Controller, Post, Body, Get, Res, Param, Put, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { OrderDto } from './order.dto';
import { Response } from 'express';
import { plainToClass } from 'class-transformer';

@Controller('order')
export class OrderController {

    constructor(private readonly service: OrderService) { }

    @Post()
    async save(@Body() orderDto: OrderDto) {
        const order = plainToClass(Order, orderDto);
        return this.service.save(order);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Delete(":id")
    remove(@Param() id: number, @Res() res: Response) {
        this.service.delete(id);
        return res.status(200).json({ message: "Pedido deletado com sucesso!" });
    }

    @Put(":id")
    async update(@Param() id: number, @Body() dto: OrderDto) {
        const order = await this.findById(id);

        dto.orderDate ? delete order.orderDate : null;
        dto.amount ? delete order.amount : null;
        dto.valueProducts ? delete order.valueProducts : null;
        dto.shippingAddress ? delete order.shippingAddress : null;
        dto.shippingCompany ? delete order.shippingCompany : null;
        dto.orderItems.product ? delete dto.orderItems.product : null;
        dto.orderItems.quantity ? delete dto.orderItems.quantity : null;
        dto.orderItems.totalValue ? delete dto.orderItems.totalValue : null;
        dto.orderItems.unitValue ? delete dto.orderItems.unitValue : null;

        const orderUpdated = Object.assign(order, dto);

        return this.service.save(orderUpdated);
    }
}
