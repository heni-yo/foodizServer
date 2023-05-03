import { Entity, PrimaryColumn, ManyToOne, JoinColumn, BaseEntity } from "typeorm";
import Item from "../Item";
import Ingredient from "../Ingredient";

@Entity('itemToIngredient') // todo  rename
export default class IngredientToItem extends BaseEntity {
  @PrimaryColumn({ name: 'itemId' })
  itemId: number;

  @PrimaryColumn({ name: 'ingredientId' })
  ingredientId: number;

  @ManyToOne(
    () => Item,
    item => item.ingredients,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'itemId', referencedColumnName: 'itemId' }])
  items: Item[];

  @ManyToOne(
    () => Ingredient,
    ingredient => ingredient.items,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'ingredientId', referencedColumnName: 'ingredientId' }])
  ingredients: Ingredient[];
}