import { GameLevel as TGameLevel } from "../api/gameLevel/GameLevel";

export const GAMELEVEL_TITLE_FIELD = "title";

export const GameLevelTitle = (record: TGameLevel): string => {
  return record.title?.toString() || String(record.id);
};
