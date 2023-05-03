import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne, Column, ManyToMany, JoinTable } from "typeorm";
import Item from "./Item";
import ItemToOrder from "./joins/ItemToOrder";

@ObjectType()
@Entity()
export default class Ingredient extends BaseEntity {
  @Field(()=> ID)
  @PrimaryGeneratedColumn()
  ingredientId!: number;

  @Field()
  @Column()
  name:string
  
  @Field()
  @Column()
  logo:string

  @ManyToMany(() => Item,(item)=>item.ingredients,{onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
  items: Item[];

//todo jdid
  // @ManyToMany(() => ItemToOrder, (itemToOrder) => itemToOrder.ingredients)

  // itemsToOrders: ItemToOrder[];
}
