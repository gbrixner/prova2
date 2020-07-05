import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { Order } from "src/order/order.entity";
import { Product } from "src/product/product.entity";

@Entity("orderitem")
export class OrderItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'quantity', type: 'numeric', precision: 15, scale: 3 })
    quantity: number;

    @Column({ name: 'unitValue', type: 'numeric', precision: 15, scale: 3 })
    unitValue: number;

    @Column({ name: 'totalValue', type: 'numeric', precision: 15, scale: 3 })
    totalValue: number;

    @ManyToOne(type => Order, order => order.orderitems)
    order: Order;

    @ManyToOne(type => Product, product => product.orderitem)
    product: Product;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}