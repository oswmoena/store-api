import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne, OneToMany, OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import User from "./User";
import Purchase from "./Purchase";
import {PaymentMethod} from "./index";

@Entity()
export default class Sell extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    total: number

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @ManyToOne(()=>User, user=> user.sell)
    @JoinColumn({name: 'user_id'})
    user: User

    @OneToMany(()=>Purchase, purchase => purchase.sell)
    purchase: Purchase[]

    @ManyToOne(()=> PaymentMethod, paymentMethod => paymentMethod.sell)
    @JoinColumn({name: 'payment_method_id'})
    paymentMethod: PaymentMethod
}