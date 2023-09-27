import { Answer } from "../entities/Answer"
import { IAnswersRepository } from "../repository/IAnswersRepository"

interface AnswerQuestionsRequest {
  questionId: string
  instructorId: string   
  content: string 
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: IAnswersRepository){}
  async execute({questionId, instructorId, content} : AnswerQuestionsRequest){
    const answer = new Answer({
      authorId: instructorId,
      content,
      questionId
    })

    return answer;
  }
}