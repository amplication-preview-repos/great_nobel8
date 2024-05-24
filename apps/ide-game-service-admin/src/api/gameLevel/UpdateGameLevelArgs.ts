import { GameLevelWhereUniqueInput } from "./GameLevelWhereUniqueInput";
import { GameLevelUpdateInput } from "./GameLevelUpdateInput";

export type UpdateGameLevelArgs = {
  where: GameLevelWhereUniqueInput;
  data: GameLevelUpdateInput;
};
