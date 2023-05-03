import { Field, InputType } from "type-graphql";

@InputType()
export class ItemCreateInput {  
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;
}

@InputType()
export class ItemUpdateInput { 
 
  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  price: number;

  @Field({nullable:true})
  description: string;
}

@InputType()
export class ItemDeleteInput {  
  @Field()
  itemId: number;

}
