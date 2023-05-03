import { Field, InputType } from "type-graphql";

@InputType()
export class UserCreateInput {
  @Field()
  pseudo: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  tel: string;

  @Field()
  address: string;

  @Field()
  description: string;

  @Field()
  password!: string;

  @Field()
  confirmed!: boolean;

}
export class UserUpdateInput {
  @Field()
  pseudo: string;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  tel: string;

  @Field()
  address: string;

  @Field()
  description: string;

  @Field()
  password!: string;

}
export class UserDeleteInput {
  @Field()
  pseudo: string;
}
