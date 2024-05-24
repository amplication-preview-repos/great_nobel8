import { QuestionUpdateManyWithoutGameLevelsInput } from "./QuestionUpdateManyWithoutGameLevelsInput";

export type GameLevelUpdateInput = {
  description?: string | null;
  questions?: QuestionUpdateManyWithoutGameLevelsInput;
  title?: string | null;
};
