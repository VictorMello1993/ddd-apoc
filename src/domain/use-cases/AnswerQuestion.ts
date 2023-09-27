import { Answer } from "../entities/Answer"

interface AnswerQuestionsRequest {
  questionId: string
  instructorId: string   
  content: string 
}

export class AnswerQuestionUseCase {
  execute({questionId, instructorId, content} : AnswerQuestionsRequest){
    const answer = new Answer(content)

    return answer;
  }
}