import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
} from "typeorm";
import Item from "./Item";

@ObjectType()
@Entity()
export default class Order extends BaseEntity {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  orderId!: number;

  @Field(()=>String)
  @CreateDateColumn()
  date!: Date;

  @Field(()=>[Item])
  @ManyToMany(() => Item, (item) => item.orders)
  items: Item[];
}
