import Answer from "@/entities/Answer";
import IAnswer from "@/interfaces/IAnswer";

/**
 * 
 * 
*/
export class AnswerAdapter {
    
    protected answers : Array<Answer>
    protected idUser  : number
    
    constructor(
        answers : Array<Answer>,
        idUser  : number
    ){
        this.answers = answers
        this.idUser = idUser
    }

    /**
     * 
    */
    adapt(){

    }
}