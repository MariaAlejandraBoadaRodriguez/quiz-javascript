import { Question } from '../models/Question.js'
import { data } from './data.js'

export const preguntas = data.map(question => new Question(question.question, question.choises, question.answer, question.result))