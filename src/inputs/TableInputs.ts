import { Field, InputType } from "type-graphql";

@InputType()
export class TableCreateInput {  
  @Field()
  tabNum: number;

  @Field()
  capcity: number;

  @Field()
  placement: string;
}

@InputType()
export class TableUpdateInput { 
 
  @Field({nullable : true})
  tabNum: number;

  @Field({nullable : true})
  capcity: number;

  @Field({nullable : true})
  placement: string;

  @Field({nullable : true})
  reserved: boolean;
}

@InputType()
export class TableDeleteInput { 
 
  @Field()
  tabNum: number;
}
