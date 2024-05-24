import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  gameLevelId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
