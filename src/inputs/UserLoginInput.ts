import { Field, InputType } from "type-graphql";

@InputType()
export default class UserLoginInput   {
    
    @Field()
    email!: string
    
    @Field()
    password!: string 
}