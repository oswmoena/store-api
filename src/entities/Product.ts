import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Purchase from "./Purchase";

@Entity()
export default class Product extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    quantity: number

    @Column()
    description: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @OneToMany(()=>Purchase, purchase => purchase.product)
    purchase: Purchase[]
}