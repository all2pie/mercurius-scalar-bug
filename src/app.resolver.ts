import { Args, Query, Resolver } from '@nestjs/graphql';
import { GraphQLObjectID } from 'graphql-scalars';

@Resolver()
export class AppResolver {
  @Query(() => Boolean)
  test(@Args('id', { type: () => GraphQLObjectID }) id) {
    console.log('id', id);

    return true;
  }
}
