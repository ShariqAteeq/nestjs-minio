import { ImageUploadData } from './image-upload';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { MinioClientService } from 'src/minio-client/minio-client.service';

@Resolver(() => ImageUploadData)
export class ImageUploadResolver {
  constructor(private minioClientService: MinioClientService) {}

  @Query(() => String)
  hello() {
    return 'Hi!';
  }

  @Mutation(() => Boolean)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ) {
    console.log('file', file);
    const fileRes = await this.minioClientService.upload(file);
    console.log('fileRess   s', fileRes);
    return true;
  }
}
