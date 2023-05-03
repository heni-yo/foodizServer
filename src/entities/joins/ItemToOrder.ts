import {
  Entity,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
  Column
} from "typeorm";
import Item from "../Item";
import Order from "../Order";
import { Field, ID } from "type-graphql";
import Ingredient from "../Ingredient";

@Entity("itemToOrder")
export default class ItemToOrder extends BaseEntity {
  @PrimaryGeneratedColumn({name:'itemToOrderId'})
  itemToOrderId: number;

  @Column({ name: "itemId" })
  itemId: number;

  @Column({ name: "orderId" })
  orderId: number;

  @ManyToOne(() => Item, (item) => item.orders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "itemId", referencedColumnName: "itemId" }])
  items: Item[];

  @ManyToOne(() => Order, (order) => order.items, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "orderId", referencedColumnName: "orderId" }])
  orders: Order[];

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
}
