import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MinioClientModule } from './minio-client/minio-client.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ImageUploadResolver } from './image-upload/image-upload.resolver';
import { MinioClientService } from './minio-client/minio-client.service';

@Module({
  imports: [
    MinioClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [ImageUploadResolver],
})
export class AppModule {}
