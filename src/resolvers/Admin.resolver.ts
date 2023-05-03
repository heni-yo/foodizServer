import { Query, Resolver, Arg, Mutation } from "type-graphql";
import Category from "../entities/Category";
import {
  CategoryDeleteInput,
  CategoryUpdateInput,
} from "../inputs/CategoryInputs";
import Item from "../entities/Item";
import {
  ItemCreateInput,
  ItemDeleteInput,
  ItemUpdateInput,
} from "../inputs/ItemInputs";
import Ingredient from "../entities/Ingredient";
import {
  IngredientCreateInput,
  IngredientDeleteInput,
  IngredientUpdateInput,
} from "../inputs/IngredientsInput";
import { nullRemover } from "./utils";
import Table from "../entities/Table";
import {
  TableCreateInput,
  TableDeleteInput,
  TableUpdateInput,
} from "../inputs/TableInputs";
import IngredientToItem from "../entities/joins/IngredientToItem";
import ItemToOrder from "../entities/joins/ItemToOrder";
import Order from "../entities/Order";

@Resolver()
export default class AdminResolver {
  // !category
  @Query(() => [Category])
  async showCategorys(): Promise<Category[]> {
    return Category.find({
      relations: ["items", "items.ingredients"],
      loadEagerRelations: true,
    });
  }
  @Mutation(() => Category, { nullable: true })
  async addCategory(
    @Arg("categoryName") categoryName: string
  ): Promise<Category | null> {
    const category = Category.create({ categoryName });
    await category.save();
    return category;
  }
  @Mutation(() => String, { nullable: true })
  async updateCategory(
    @Arg("data") { categoryId, categoryName }: CategoryUpdateInput
  ): Promise<String | null> {
    await Category.update({ categoryId }, { categoryName });
    return categoryName;
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteCategory(
    @Arg("data") { categoryId }: CategoryDeleteInput
  ): Promise<Boolean> {
    try {
      await Category.delete({ categoryId });
      return true;
    } catch (error) {
      return false;
    }
  }
  // !item
  @Query(() => [Item])
  async showItems(): Promise<Item[]> {
    return Item.find({
      loadEagerRelations: true,
      relations: ["ingredients"],
    });
  }

  @Mutation(() => Item, { nullable: true })
  async addItem(
    @Arg("data") data: ItemCreateInput,
    @Arg("categoryId") categoryId: number
  ): Promise<Item | null> {
    const item = Item.create({ category: { categoryId }, ...data });
    await item.save();
    return item;
  }

  @Mutation(() => Boolean, { nullable: true })
  async updateItem(
    @Arg("data") data: ItemUpdateInput,
    @Arg("itemId") itemId: number
  ): Promise<Boolean | null> {
    try {
      data = nullRemover(data);
      await Item.update({ itemId }, { ...data });
      return true;
    } catch (err) {
      return false;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteItem(@Arg("data") { itemId }: ItemDeleteInput): Promise<Boolean> {
    try {
      await Item.delete({ itemId });
      return true;
    } catch (error) {
      return false;
    }
  }

  // !ingredient
  @Query(() => [Ingredient])
  async showIngredients(): Promise<Ingredient[]> {
    return Ingredient.find();
  }

  @Mutation(() => Ingredient, { nullable: true })
  async addIngredient(
    @Arg("data") data: IngredientCreateInput
  ): Promise<Ingredient | null> {
    const ingredient = Ingredient.create({ ...data });
    await ingredient.save();
    return ingredient;
  }

  @Mutation(() => Boolean, { nullable: true })
  async updateIngredient(
    @Arg("data") data: IngredientUpdateInput,
    @Arg("ingredientId") ingredientId: number
  ): Promise<Boolean | null> {
    try {
      data = nullRemover(data);
      await Ingredient.update({ ingredientId }, { ...data });
      return true;
    } catch (err) {
      return false;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteIngredient(
    @Arg("data") { ingredientId }: IngredientDeleteInput
  ): Promise<Boolean> {
    try {
      await Ingredient.delete({ ingredientId });
      return true;
    } catch (error) {
      return false;
    }
  }
  // !table
  @Query(() => [Table])
  async showTables(): Promise<Table[]> {
    return Table.find();
  }

  @Mutation(() => Table, { nullable: true })
  async addTable(@Arg("data") data: TableCreateInput): Promise<Table | null> {
    try {
      const findTalbe = Table.findOneBy({ tabNum: data.tabNum });
      if (findTalbe) {
        return null;
      }
      const table = Table.create({ ...data });
      await table.save();
      return table;
    } catch (error) {
      return null;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async updateTable(
    @Arg("data") { tabNum, ...data }: TableUpdateInput
  ): Promise<Boolean | null> {
    try {
      data = nullRemover(data);
      await Table.update({ tabNum }, { ...data });
      return true;
    } catch (err) {
      return false;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteTable(
    @Arg("data") { tabNum }: TableDeleteInput
  ): Promise<Boolean> {
    try {
      await Table.delete({ tabNum });
      return true;
    } catch (error) {
      return false;
    }
  }
  // ! Ingredient To Item
  @Mutation(() => Boolean, { nullable: true })
  async addIngredientToItem(
    @Arg("itemId") itemId: number,
    @Arg("ingredientId") ingredientId: number
  ): Promise<Boolean | null> {
    try {
      const result = IngredientToItem.create({ ingredientId, itemId });
      await result.save();
      return true;
    } catch (error) {
      return false;
    }
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteIngredientToItem(
    @Arg("itemId") itemId: number,
    @Arg("ingredientId") ingredientId: number
  ): Promise<Boolean | null> {
    try {
      await IngredientToItem.delete({ ingredientId, itemId });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  // ! Item to order
  @Mutation(() => Boolean, { nullable: true })
  async addItemToOrder(@Arg("itemId") itemId: number): Promise<Boolean> {
    const order = Order.create({});
    const {orderId} =await order.save();
    const itemToOrder = ItemToOrder.create({ itemId, orderId });
    const itemOrder = await itemToOrder.save();
    console.log(itemOrder);
    return true;
  }
  @Query(()=>[ItemToOrder])
  async showOrders():Promise<ItemToOrder[]>{
    const res =await ItemToOrder.find({
      relations: ["items", "orders"],
      loadEagerRelations: true,
    })
    console.log(res)
    return res
  }
}
