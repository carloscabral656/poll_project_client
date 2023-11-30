import Alternative from "@/entities/Alternative";
import Answer from "@/entities/Answer";

/**
 * Class for adapt
 * 
*/
export class AnswerAdapter {
    
    protected answers : Array<Answer>
    protected idUser  : number
    protected dateAnswer : Date
    
    constructor(
        answers : Array<Answer>,
        idUser  : number
    ){
        this.answers = answers;
        this.idUser  = idUser;
        this.dateAnswer = new Date();
    }

    /**
     * 
     * 
    */
    adapt(){
        const answersAdapt = new Map();
        answersAdapt.set('id_user', this.idUser);
        answersAdapt.set('date_answer', this.dateAnswer);
        
        // For each answer the system must add a new object of answer
        const answersAux : any = [];
        this.answers.forEach( (answer: Answer) => {
            const answerAux = {
                'id_question': answer.id,
                'choosen_alternatives': answer.choosenAlternativeValues?.map((alternative: Alternative) => {
                    return alternative.value
                }),
                'comment': answer.getComment()
            };
            answersAux.push(answerAux)
        });
        answersAdapt.set('answers', answersAux);
    }
}