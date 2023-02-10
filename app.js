//@ts-check
import { preguntas } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

function main(){
    const quiz = new Quiz(preguntas);
    const ui = new UI();

    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showChoices(quiz.getQuestionIndex().choises)
}

main()