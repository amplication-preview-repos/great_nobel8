import { GameLevelWhereInput } from "./GameLevelWhereInput";
import { GameLevelOrderByInput } from "./GameLevelOrderByInput";

export type GameLevelFindManyArgs = {
  where?: GameLevelWhereInput;
  orderBy?: Array<GameLevelOrderByInput>;
  skip?: number;
  take?: number;
};
