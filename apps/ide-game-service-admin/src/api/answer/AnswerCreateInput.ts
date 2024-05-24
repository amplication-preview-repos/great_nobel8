import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  content?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
