import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import Item from "./Item";

@ObjectType()
@Entity()
export default class Category extends BaseEntity {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  categoryId!: number;
  
  @Field()
  @Column()
  categoryName: string;

  @Field(()=>[Item],{nullable:true})
  @OneToMany(() => Item, (item) => item.category)
  items: Item[];
} 
