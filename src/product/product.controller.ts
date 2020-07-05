import { Controller, Post, Body, Get, Param, Res, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from './product.dto';
import { Response } from 'express';

@Controller('product')
export class ProductController {

    constructor(private readonly service: ProductService) { }

    @Post()
    save(@Body() product: Product) {
        return this.service.save(product);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param() id: number) {
        return this.service.findById(id);
    }

    @Put(":id")
    async update(@Param() id: number, @Body() { name, price, code }: ProductDto) {
        const product = await this.findById(id);
        name ? delete product.name : null;
        price ? delete product.price : null;
        code ? delete product.code : null;

        const productUpdated = Object.assign(product, { name, price, code });

        return this.service.save(productUpdated);
    }

    @Delete(":id")
    async remove(@Param() id: number, @Res() res: Response) {
        await this.service.delete(id);
        return res.status(200).json({ message: "The product was successfully deleted!" });
    }
}
