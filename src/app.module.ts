import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  MercuriusFederationDriver,
  MercuriusFederationDriverConfig,
} from '@nestjs/mercurius';
import { AppResolver } from './app.resolver';
import { MercuriusDriver } from '@nestjs/mercurius';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      // Works Fine:
      // driver: MercuriusDriver,
      graphiql: true,
      autoSchemaFile: true,
    }),
  ],
  providers: [AppResolver],
})
export class AppModule {}
