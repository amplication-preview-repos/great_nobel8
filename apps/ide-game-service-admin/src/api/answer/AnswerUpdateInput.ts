import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  content?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
