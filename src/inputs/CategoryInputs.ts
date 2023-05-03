import { Field, InputType } from "type-graphql";

@InputType()
export class CategoryCreateInput {
  @Field()
  catName: string;
}

@InputType()
export class CategoryUpdateInput {
  @Field()
  categoryId: number;
  @Field()
  categoryName: string;
}
@InputType()
export class CategoryDeleteInput {
  @Field()
  categoryId: number;
}
