import { Field, InputType } from "type-graphql";

@InputType()
export class IngredientCreateInput {
  @Field()
  name: string;

  @Field()
  logo: string;
}

@InputType()
export class IngredientUpdateInput {
  @Field()
  name: string;

  @Field()
  logo: string;
}

@InputType()
export class IngredientDeleteInput {
  @Field()
  ingredientId: number;
}
