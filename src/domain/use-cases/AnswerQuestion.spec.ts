import {expect, test} from 'vitest'
import { AnswerQuestionUseCase } from './AnswerQuestion';
import { IAnswersRepository } from '../repository/IAnswersRepository';
import { Answer } from '../entities/Answer';

const fakeAnswersRepository: IAnswersRepository = {
  create: async(answer: Answer) => {
    return;
  }
}

test('Create a answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository); 

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})