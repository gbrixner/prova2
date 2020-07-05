import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('stock')
export class Stock {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ name: 'stockQuantity', type: 'numeric', precision: 15, scale: 3 })
  stockQuantity: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(type => Product, product => product.stock)
  product: Product;
}