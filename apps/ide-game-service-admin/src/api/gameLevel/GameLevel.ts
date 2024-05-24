import { Question } from "../question/Question";

export type GameLevel = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  title: string | null;
  updatedAt: Date;
};
