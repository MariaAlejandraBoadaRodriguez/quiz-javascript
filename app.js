//@ts-check
import { preguntas } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz The main quiz object 
 * @param {UI} ui UI object 
 */

const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
        console.log(quiz.score);
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choises, (currentChoice) =>{
        quiz.guess(currentChoice);
        renderPage(quiz, ui)
        
        ui.showProgess(quiz.questionIndex, quiz.questions.length);
    });
    }
}

function main(){
    const quiz = new Quiz(preguntas);
    const ui = new UI();

    renderPage(quiz, ui)
}

main()