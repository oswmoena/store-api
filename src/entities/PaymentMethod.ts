import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Sell from "./Sell";

@Entity()
export default class PaymentMethod extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    method: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @OneToMany(() => Sell, sell => sell.paymentMethod)
    sell: Sell[]
}