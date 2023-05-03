import { Field, InputType } from "type-graphql";

@InputType()
export default class ClientCreateInput {
  @Field()
  loyaltyScore: number;

}
