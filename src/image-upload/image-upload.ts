import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageUploadData {
  @Field({ nullable: true })
  name: string;
}
