import { Module } from "@nestjs/common";
import { GameLevelModuleBase } from "./base/gameLevel.module.base";
import { GameLevelService } from "./gameLevel.service";
import { GameLevelController } from "./gameLevel.controller";
import { GameLevelResolver } from "./gameLevel.resolver";

@Module({
  imports: [GameLevelModuleBase],
  controllers: [GameLevelController],
  providers: [GameLevelService, GameLevelResolver],
  exports: [GameLevelService],
})
export class GameLevelModule {}
