import { Controller, Post, Body, Get, Put, Res, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { Response } from 'express';
import { CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {

    constructor(private readonly service: CustomerService) { }

    @Post()
    save(@Body() customer: Customer) {
        return this.service.save(customer);
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
    async update(@Param() id: number, @Body() { name, cpf, address}: CustomerDto) {
    const customer = await this.findById(id);
    name ? delete customer.name : null;
    cpf ? delete customer.cpf : null;
    address ? delete customer.address : null;

    const customerUpdated = Object.assign(customer, { name, cpf, address });

    return this.service.save(customerUpdated);
  }

    @Delete(":id")
    remove(@Param() id: number, @Res() res: Response) {
    this.service.delete(id);
    return res.status(200).json({ message: "Cliente excluido com sucesso!" });
  }

}
