import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { GameLevelWhereUniqueInput } from "../gameLevel/GameLevelWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  content?: string | null;
  gameLevel?: GameLevelWhereUniqueInput | null;
};
