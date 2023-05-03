import { Field, InputType } from "type-graphql";

@InputType()
export default class StaffCreateInput {
  @Field()
  salary: number;
}
