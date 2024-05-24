import { Answer } from "../answer/Answer";
import { GameLevel } from "../gameLevel/GameLevel";

export type Question = {
  answers?: Array<Answer>;
  content: string | null;
  createdAt: Date;
  gameLevel?: GameLevel | null;
  id: string;
  updatedAt: Date;
};
