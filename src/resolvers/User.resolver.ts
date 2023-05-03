import { Query, Resolver, Arg, Mutation } from "type-graphql";
import User from "../entities/User";
import { UserCreateInput, UserDeleteInput, UserUpdateInput } from "../inputs/UserInput";

@Resolver()
export default class UserResolver {
  @Query(() => [User])
  async Users(): Promise<User[]> {
    const users = await User.find();
    return users;
  }
  // * create user mutation   input
  // todo add arg validation
  @Mutation(() => User)
  async CreateUser(@Arg("data") data: UserCreateInput): Promise<User> {
    const user = User.create({ ...data });
    await user.save();
    return user;
  }
  @Mutation(() => User)
  async updateUser(@Arg("data") data: UserUpdateInput): Promise<null> {
    await User.update({userId:1},{...data})
    return null;
  }
  @Mutation({nullable : true})
  async deleteUser(@Arg("data") data: UserDeleteInput): Promise<null> {
    await User.delete({...data});
    return null;
  }
}
