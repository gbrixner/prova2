import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private readonly repository: Repository<Customer>) {
    }

    save(customer: Customer) {
        return this.repository.save(customer);
    }

    findAll() {
        return this.repository.find();
    }

    findById(id: number) {
        return this.repository.findOne(id);
    }

    delete(id: number) {
        return this.repository.delete(id);
    }
    
    update(id: number, customer: Customer) {
        return this.repository.update(id, customer);
    }

}
