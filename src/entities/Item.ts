import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinTable,
  ManyToMany,
} from "typeorm";
import Category from "./Category";
import Ingredient from "./Ingredient";
import Order from "./Order";

@ObjectType()
@Entity()
export default class Item extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  itemId!: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column({ default: null })
  img: string;

  @ManyToOne(() => Category, (category) => category.items)
  category?: Category;

  // todo  rename
  @Field(() => [Ingredient], { nullable: true })
  @ManyToMany(() => Ingredient, (ingredient) => ingredient.items, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinTable({
    name: "itemToIngredient",
    joinColumn: {
      name: "itemId",
      referencedColumnName: "itemId",
    },
    inverseJoinColumn: {
      name: "ingredientId",
      referencedColumnName: "ingredientId",
    },
  })
  ingredients: Ingredient[];

  @ManyToMany(() => Order, (order) => order.items, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinTable({
    name: "itemToOrder",
    joinColumn: {
      name: "itemId",
      referencedColumnName: "itemId",
    },
    inverseJoinColumn: {
      name: "orderId",
      referencedColumnName: "orderId",
    },
  })
  orders: Order[];
}
