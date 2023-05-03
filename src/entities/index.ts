import { MixedList, EntitySchema } from "typeorm";
import Category from "./Category";
import Item from "./Item";
import Ingredient from "./Ingredient";
import Table from "./Table";
import IngredientToItem from "./joins/IngredientToItem";
import Order from "./Order";
import ItemToOrder from "./joins/ItemToOrder";
// import IngredientToItemToOrder from "./joins/IngredientToItemToOrder";


const entities : MixedList<string | Function | EntitySchema<any>>
= [Category,Item,Ingredient,Table,IngredientToItem,Order]
export default entities
