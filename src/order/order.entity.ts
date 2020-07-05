import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Customer } from "src/customer/customer.entity";
import { OrderItem } from "src/orderitem/orderitem.entity";

@Entity("order")
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'orderNumber', type: 'varchar', length: '8' })
    orderNumber: string;

    @Column({ name: 'orderDate', type: 'date' })
    orderDate: Date;

    @Column({ name: 'shippingCompany', type: 'varchar', length: '60' })
    shippingCompany: string;

    @Column({ name: 'shippingAddress', type: 'varchar', length: 80 })
    shippingAddress: string;

    @Column({ name: 'amount', type: 'numeric', precision: 15, scale: 3 })
    amount: number;

    @Column({ name: 'valueProducts', type: 'numeric', precision: 15, scale: 3 })
    valueProducts: number;

    @Column({ name: 'discountAmount', type: 'numeric', precision: 15, scale: 3 })
    discountAmount: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => Customer, customer => customer.order)
    customer: Customer;

    @OneToMany(type => OrderItem, orderitem => orderitem.order, { cascade: true, eager: true })
    orderitems: OrderItem[];
}