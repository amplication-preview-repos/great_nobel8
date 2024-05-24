import * as graphql from "@nestjs/graphql";
import { GameLevelResolverBase } from "./base/gameLevel.resolver.base";
import { GameLevel } from "./base/GameLevel";
import { GameLevelService } from "./gameLevel.service";

@graphql.Resolver(() => GameLevel)
export class GameLevelResolver extends GameLevelResolverBase {
  constructor(protected readonly service: GameLevelService) {
    super(service);
  }
}
