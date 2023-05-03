import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export default class Table extends BaseEntity {
  @Field(()=>ID)
  @PrimaryColumn({unique:true})
  tabNum!: number;

  @Field()
  @Column()
  capcity!: number;

  @Field()
  @Column()
  placement!: string;

  @Field()
  @Column({ default: false })
  reserved!: boolean;
}
