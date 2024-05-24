import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { GameLevelWhereUniqueInput } from "../gameLevel/GameLevelWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  content?: string | null;
  gameLevel?: GameLevelWhereUniqueInput | null;
};
