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
    showChoices(choices){
        const choicesContainer = document.getElementById('choises')
        for(let i = 0; i < choices.length; i++){
            const button = document.createElement('button')
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => console.log('clicked'))
            choicesContainer.append(button)
        }
    }
}