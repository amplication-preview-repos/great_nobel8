/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Question as PrismaQuestion,
  Answer as PrismaAnswer,
  GameLevel as PrismaGameLevel,
} from "@prisma/client";

export class QuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.QuestionCountArgs, "select">): Promise<number> {
    return this.prisma.question.count(args);
  }

  async questions<T extends Prisma.QuestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionFindManyArgs>
  ): Promise<PrismaQuestion[]> {
    return this.prisma.question.findMany<Prisma.QuestionFindManyArgs>(args);
  }
  async question<T extends Prisma.QuestionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionFindUniqueArgs>
  ): Promise<PrismaQuestion | null> {
    return this.prisma.question.findUnique(args);
  }
  async createQuestion<T extends Prisma.QuestionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionCreateArgs>
  ): Promise<PrismaQuestion> {
    return this.prisma.question.create<T>(args);
  }
  async updateQuestion<T extends Prisma.QuestionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionUpdateArgs>
  ): Promise<PrismaQuestion> {
    return this.prisma.question.update<T>(args);
  }
  async deleteQuestion<T extends Prisma.QuestionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuestionDeleteArgs>
  ): Promise<PrismaQuestion> {
    return this.prisma.question.delete(args);
  }

  async findAnswers(
    parentId: string,
    args: Prisma.AnswerFindManyArgs
  ): Promise<PrismaAnswer[]> {
    return this.prisma.question
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .answers(args);
  }

  async getGameLevel(parentId: string): Promise<PrismaGameLevel | null> {
    return this.prisma.question
      .findUnique({
        where: { id: parentId },
      })
      .gameLevel();
  }
}
