import { Entity, PrimaryGeneratedColumn, Column,  OneToMany } from "typeorm";
import { Order } from "src/order/order.entity";

@Entity("customer")
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', type: 'varchar', length: '80' })
    name: string;

    @Column({ name: 'cpf', type: 'varchar', length: '40' })
    cpf: string;

    @Column({ name: 'address', type: 'varchar', length: '120' })
    address: string;

    @Column({ name: 'rg', type: 'varchar', length: '40' })
    rg: string;

    @Column({ name: 'bairro', type: 'varchar', length: '60' })
    bairro: string;

    @Column({ name: 'cidade', type: 'varchar', length: '60' })
    cidade: string;

    @Column({ name: 'cep', type: 'varchar', length: '40' })
    cep: string;

    @OneToMany(type => Order, order => order.customer)
    order: Order;
}