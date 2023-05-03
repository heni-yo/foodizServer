// import { Entity, PrimaryColumn, ManyToOne, JoinColumn, BaseEntity, Column } from "typeorm";
// import Ingredient from "../Ingredient";
// import ItemToOrder from "./ItemToOrder";
// import { Field } from "type-graphql";

// @Entity('ingredientToItemToOrder') // todo  rename
// export default class IngredientToItemToOrder extends BaseEntity {
//   @PrimaryColumn({ name: 'itemToOrderId' })
//   itemToOrder: number;

//   @PrimaryColumn({ name: 'ingredientId' })
//   ingredientId: number;

//   @ManyToOne(
//     () => ItemToOrder,
//     itemToOrder => itemToOrder.ingredients,
//     {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
//   )
//   @JoinColumn([{ name: 'itemToOrderId', referencedColumnName: 'itemToOrderId' }])
//   itemToOrders: ItemToOrder[];

//   @Field()
//   @Column()
//   Qte:number

//   @ManyToOne(
//     () => Ingredient,
//     ingredient => ingredient.itemsToOrders,
//     {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
//   )
//   @JoinColumn([{ name: 'ingredientId', referencedColumnName: 'ingredientId' }])
//   ingredient: Ingredient[];
// }