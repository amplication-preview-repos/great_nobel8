/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { GameLevelWhereUniqueInput } from "../../gameLevel/base/GameLevelWhereUniqueInput";

@InputType()
class QuestionUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AnswerUpdateManyWithoutQuestionsInput,
  })
  @ValidateNested()
  @Type(() => AnswerUpdateManyWithoutQuestionsInput)
  @IsOptional()
  @Field(() => AnswerUpdateManyWithoutQuestionsInput, {
    nullable: true,
  })
  answers?: AnswerUpdateManyWithoutQuestionsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => GameLevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GameLevelWhereUniqueInput)
  @IsOptional()
  @Field(() => GameLevelWhereUniqueInput, {
    nullable: true,
  })
  gameLevel?: GameLevelWhereUniqueInput | null;
}

export { QuestionUpdateInput as QuestionUpdateInput };
