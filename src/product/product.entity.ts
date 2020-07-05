import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, OneToOne } from "typeorm";
import { OrderItem } from "src/orderitem/orderitem.entity";
import { Stock } from 'src/stock/stock.entity';

@Entity("product")
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'code', type: 'varchar', length: '10' })
    code: string;

    @Column({ name: 'name', type: 'varchar', length: '60' })
    name: string;

    @Column({ name: 'price', type: 'numeric', precision: 15, scale: 3 })
    price: number;

    @Column({ name: 'stockQuantity', type: 'numeric', precision: 15, scale: 3 })
    stockQuantity: number;

    @Column({ name: 'descricao', type: 'varchar', length: '120' })
    descricao: string;

    @Column({ name: 'expirationDate', type: 'date' })
    expirationDate: Date;
    
    @Column({ name: 'unity', type: 'varchar', length: '2' })
    unity: string;

    @OneToMany(type => OrderItem, orderitem => orderitem.product)
    orderitem: OrderItem;

    @OneToOne(type => Stock, stock => stock.product)
    stock: Stock;
}