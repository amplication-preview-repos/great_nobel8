import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameLevelService } from "./gameLevel.service";
import { GameLevelControllerBase } from "./base/gameLevel.controller.base";

@swagger.ApiTags("gameLevels")
@common.Controller("gameLevels")
export class GameLevelController extends GameLevelControllerBase {
  constructor(protected readonly service: GameLevelService) {
    super(service);
  }
}
