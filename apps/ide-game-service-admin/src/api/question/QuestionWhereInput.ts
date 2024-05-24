import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameLevelWhereUniqueInput } from "../gameLevel/GameLevelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  content?: StringNullableFilter;
  gameLevel?: GameLevelWhereUniqueInput;
  id?: StringFilter;
};
