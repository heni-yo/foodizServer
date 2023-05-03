import { Field, InputType } from "type-graphql";

@InputType()
export default class OrderCreateInput {
  @Field()
  pseudo: string;

  @Field()
  date!: Date;

  @Field()
  tableNumber!: number;

}
