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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { QuestionUpdateManyWithoutGameLevelsInput } from "./QuestionUpdateManyWithoutGameLevelsInput";
import { Type } from "class-transformer";

@InputType()
class GameLevelUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => QuestionUpdateManyWithoutGameLevelsInput,
  })
  @ValidateNested()
  @Type(() => QuestionUpdateManyWithoutGameLevelsInput)
  @IsOptional()
  @Field(() => QuestionUpdateManyWithoutGameLevelsInput, {
    nullable: true,
  })
  questions?: QuestionUpdateManyWithoutGameLevelsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { GameLevelUpdateInput as GameLevelUpdateInput };
