export class Question{
    /**
     * 
     * @param {string} text This is the text of the question 
     * @param {string[]} choises This are the choices of the question 
     * @param {string} answer This is the correct answer of the question 
     * @param {string} result This is the suport about correct answer 
     */
    constructor(text, choises, answer, result){
        this.text = text;
        this.choises = choises;
        this.answer = answer;
        this.result = result;
    }
    /**
     * 
     * @param {string} choice Some text to guess 
     * @returns {boolean} Return true if the answer is correct
     */
    correctAnswer(choice){
        return choice === this.answer 
    }
}
