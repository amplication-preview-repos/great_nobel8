import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
  updatedAt?: SortOrder;
};
