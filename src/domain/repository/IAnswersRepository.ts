import { Answer } from "../entities/Answer";

export interface IAnswersRepository {
  create(answer: Answer): Promise<void>
}