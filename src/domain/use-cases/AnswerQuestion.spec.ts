import {expect, test} from 'vitest'
import { AnswerQuestionUseCase } from './AnswerQuestion';

test('Create a answer', () => {
  const answerQuestion = new AnswerQuestionUseCase(); 
  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})