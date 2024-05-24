import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameLevelServiceBase } from "./base/gameLevel.service.base";

@Injectable()
export class GameLevelService extends GameLevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
