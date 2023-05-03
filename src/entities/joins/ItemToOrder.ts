import {
  Entity,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToOne,
} from "typeorm";
import Item from "../Item";
import Order from "../Order";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity({ name: "itemToOrder" })
export default class ItemToOrder extends BaseEntity {
  @PrimaryColumn({ name: "itemId" })
  itemId: number;

  @PrimaryColumn({ name: "orderId" })
  orderId: number;
  
  @Field({nullable:true})
  @Column({ update: false, nullable: true,foreignKeyConstraintName:'price' })
  price: number;

  @Field(() => [Item], { nullable: true })
  @ManyToOne(() => Item, (item) => item.orders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "itemId", referencedColumnName: "itemId" }])
  items: Item[];

  @Field(() => [Order], { nullable: true })
  @ManyToOne(() => Order, (order) => order.items, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "orderId" }])
  orders: Order[];
}
// // todo jdid
// @Field(() => [Ingredient])
// @ManyToMany(() => Ingredient, (ingredient) => ingredient.itemsToOrders, {
//   onDelete: "NO ACTION",
//   onUpdate: "NO ACTION",
// })
// @JoinTable({
//   name: "IngredientToItemToOrder",
//   joinColumn: {
//     name: "itemToOrderId",
//     referencedColumnName: "itemToOrderId",
//   },
//   inverseJoinColumn: {
//     name: "ingredientId",
//     referencedColumnName: "ingredientId",
//   },
// })
// ingredients: Ingredient[];
