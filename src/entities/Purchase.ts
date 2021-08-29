import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Product, Sell} from "./index";

@Entity()
export default class Purchase extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    price: number

    @Column()
    quantity: number

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(()=>Sell, sell=> sell.purchase)
    @JoinColumn({name: 'sell_id'})
    sell: Sell

    @ManyToOne(()=>Product, product=> product.purchase)
    @JoinColumn({name: 'product_id'})
    product: Product
}