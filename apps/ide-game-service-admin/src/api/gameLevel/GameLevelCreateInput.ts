import { QuestionCreateNestedManyWithoutGameLevelsInput } from "./QuestionCreateNestedManyWithoutGameLevelsInput";

export type GameLevelCreateInput = {
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutGameLevelsInput;
  title?: string | null;
};
