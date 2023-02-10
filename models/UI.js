export class UI{
    constructor() {}

    /**
     * 
     * @param {string} text Question to render
     */
    
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text;
    }

    /**
     * 
     * @param {string[]} choices The choices of the question 
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choises');
        choicesContainer.innerHTML = ''
        for(let i = 0; i < choices.length; i++){
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]))
            choicesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score The total Score
     */
    showScores(score){
        const quizEndHTML = `
        <h1>Score</h1>
        <h2>Your score: ${score}</h2>
        `;

        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHTML;
    }

    showResult(result){
        const element = document.getElementById("result");
        element.innerText = result[i];
    }

    /**
     * 
     * @param {number} currentIndex The current index of the quiz
     * @param {number} total The total question number 
     */
    showProgess(currentIndex, total){
        const element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}