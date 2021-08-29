import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import Sell from "./Sell";

@Entity()
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({unique: true})
    email: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    document: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date

    @OneToMany(()=>Sell, sell => sell.user)
    sell: Sell[]
}